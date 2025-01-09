import { Component, OnInit } from '@angular/core';
import { Histoire } from '../../model/histoire';
import { CategorieHistoire } from '../../model/categorie-histoire';
import { CategorieAge } from '../../model/categorie-age';
import { HistoireService } from '../../service/histoire.service';
import { Utilisateur } from '../../model/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { CatAgeComponent } from '../cat-age/cat-age.component';
import { CatHistoireComponent } from '../cat-histoire/cat-histoire.component';
import { ListKeyManager } from '@angular/cdk/a11y';

@Component({
  selector: 'app-story-generated-page',
  imports: [CatAgeComponent, CatHistoireComponent],
  templateUrl: './story-generated-page.component.html',
  styleUrl: './story-generated-page.component.css',
  standalone: true,
})
export class StoryGeneratedPageComponent implements OnInit {
  utilisateur: Utilisateur = new Utilisateur(1, '', '', [], []);
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

  idHistoire: string | null = null;

  isLiked: boolean = false;

  promesseGetHistoire!: Promise<string>;

  constructor(
    private histoireService: HistoireService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idHistoire = this.route.snapshot.paramMap.get('id');

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
        .getHistoireById(parseInt(this.idHistoire))
        .subscribe((histoire) => {
          this.histoire = histoire;
        });
    }
  }

  getBackGround() {
    return `background-image: url(${this.histoire.urlImage});`;
  }

  changeLike() {
    this.isLiked = !this.isLiked;
  }
}
