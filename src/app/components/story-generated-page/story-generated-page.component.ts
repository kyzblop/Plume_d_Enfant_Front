import { Component, OnInit } from '@angular/core';
import { Histoire } from '../../model/histoire';
import { CategorieHistoire } from '../../model/categorie-histoire';
import { CategorieAge } from '../../model/categorie-age';
import { HistoireService } from '../../service/histoire.service';
import { Utilisateur } from '../../model/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { CatAgeComponent } from '../cat-age/cat-age.component';
import { CatHistoireComponent } from '../cat-histoire/cat-histoire.component';
import { AuthService } from '../../service/auth.service';
import { UtilisateurService } from '../../service/utilisateur.service';

@Component({
  selector: 'app-story-generated-page',
  imports: [CatAgeComponent, CatHistoireComponent],
  templateUrl: './story-generated-page.component.html',
  styleUrl: './story-generated-page.component.css',
  standalone: true,
})
export class StoryGeneratedPageComponent implements OnInit {
  utilisateur: Utilisateur = new Utilisateur(1, '', '', [], [], []);
  histoire: Histoire = new Histoire(
    1,
    '',
    '',
    CategorieHistoire.Fantastique,
    CategorieAge.DeuxTroisAns,
    '',
    0,
    this.utilisateur
  );

  listLike: Array<Histoire> | null = [];
  newListLike: Array<Histoire> | null = [];

  isUserLogin: boolean = false;
  idHistoire: number | null = 0;
  isLiked: boolean = false;
  nbLike: number = 0;

  promesseGetHistoire!: Promise<string>;

  constructor(
    private histoireService: HistoireService,
    private route: ActivatedRoute,
    private authService: AuthService,
    private utilisateurService: UtilisateurService
  ) {
    this.isUserLogin = this.authService.isAuthenticated();
  }

  ngOnInit(): void {
    this.idHistoire = parseInt(this.route.snapshot.paramMap.get('id') ?? '0');

    this.promesseGetHistoire = new Promise((resolve, reject) => {
      try {
        this.getHistoire();
        resolve("L'histoire est bien récupérée");
      } catch (error) {
        reject("L'histoire n'est pas récupérée");
      }
    });
  }

  getHistoire(): void {
    if (this.idHistoire) {
      this.histoireService
        .getHistoireById(this.idHistoire)
        .subscribe((histoire) => {
          this.histoire = histoire;

          if (this.histoire.nbLike != null) {
            this.nbLike = this.histoire.nbLike;
          }
          // Si l'utilisateur est connecté, le bouton like apparait coché ou non en fonction de si l'histoire a déjà été likée
          if (this.isUserLogin) {
            this.utilisateurService
              .getUtilisateurById(this.authService.getUserId())
              .subscribe((utilisateur) => {
                this.listLike = utilisateur.listeLike;

                if (
                  this.listLike != null &&
                  this.listLike.find(
                    (histoire) => histoire.id === this.histoire.id
                  )
                ) {
                  this.isLiked = true;
                  console.log('cette histoire est likée');
                } else {
                  this.isLiked = false;
                  console.log('cette histoire est pas likée');
                }
              });
          }
        });
    }
  }

  getBackGround() {
    return `background-image: url(${this.histoire.urlImage});`;
  }

  changeLike() {
    this.isLiked = !this.isLiked;
    if (this.isLiked) {
      // Si le boutin like est coché, il faut ajouter l'histoire dans la liste de like de l'utilisateur
      if (this.listLike != null) {
        this.listLike.push(this.histoire);
      }

      this.nbLike++;
      console.log('like:' + this.nbLike);
    } else {
      // Si le bouton est décoché, il faut retirer l'histoire de la liste des histoires likées de l'utilisateur
      if (this.listLike != null) {
        this.newListLike = this.listLike.filter(
          (histoireLike) => histoireLike.id !== this.histoire.id
        );
        this.listLike = this.newListLike;
      }

      this.nbLike--;

      console.log('dislike:' + this.nbLike);
      console.log(this.listLike);
    }

    this.utilisateurService
      .updateUtilisateur(
        new Utilisateur(
          this.authService.getUserId(),
          null,
          null,
          this.listLike,
          null,
          null
        ),
        this.authService.getUserId()
      )
      .subscribe();

    this.histoireService
      .updateHistoire(
        new Histoire(
          this.idHistoire ? this.idHistoire : 0,
          null,
          null,
          CategorieHistoire.Fantastique, // il s'agit d'une categorie par défaut, cela ne change pas la categorie d'origine
          CategorieAge.DeuxTroisAns, // il s'agit d'une categorie par défaut, cela ne change pas la categorie d'origine
          null,
          this.nbLike,
          new Utilisateur(
            this.authService.getUserId(),
            null,
            null,
            this.listLike,
            null,
            null
          ) // il s'agit d'un utilisateur par défaut, cela ne change pas le créateur d'origine
        ),
        this.idHistoire ? this.idHistoire : 0
      )
      .subscribe();
  }
}
