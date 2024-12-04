import { Component, OnInit } from '@angular/core';
import { Histoire } from '../../model/histoire';
import { CategorieHistoire } from '../../model/categorie-histoire';
import { CategorieAge } from '../../model/categorie-age';
import { HistoireService } from '../../service/histoire.service';
import { Utilisateur } from '../../model/utilisateur';
import { ActivatedRoute } from '@angular/router';
import { CatHistoireComponent } from '../cat-histoire/cat-histoire.component';
import { CatAgeComponent } from '../cat-age/cat-age.component';

@Component({
  selector: 'app-story-generated-page',
  standalone: true,
  imports: [CatHistoireComponent, CatAgeComponent],
  templateUrl: './story-generated-page.component.html',
  styleUrl: './story-generated-page.component.css',
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

  promesseGetHistoire!: Promise<string>;

  catHistoire: CategorieHistoire = CategorieHistoire.Spacial;
  catAge: CategorieAge = CategorieAge.DeuxTroisAns;

  constructor(
    private histoireService: HistoireService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.idHistoire = this.route.snapshot.paramMap.get('id');

    this.promesseGetHistoire = new Promise((resolve, reject) => {
      try {
        this.getHistoire();
        this.catHistoire = this.histoire.categorieHistoire;
        this.catAge = this.histoire.categorieAge;
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
    return `background-image: url(${this.histoire.imageB64Json});`;
  }
}
