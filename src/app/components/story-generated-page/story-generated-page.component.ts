import { Component } from '@angular/core';
import { Histoire } from '../../model/histoire';
import { CategorieHistoire } from '../../model/categorie-histoire';
import { CategorieAge } from '../../model/categorie-age';
import { HistoireService } from '../../service/histoire.service';
import { Utilisateur } from '../../model/utilisateur';

@Component({
  selector: 'app-story-generated-page',
  standalone: true,
  imports: [],
  templateUrl: './story-generated-page.component.html',
  styleUrl: './story-generated-page.component.css',
})
export class StoryGeneratedPageComponent {
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
  idHistoire: number = 2;

  promesseGetHistoire!: Promise<string>;

  constructor(private histoireService: HistoireService) {
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
    this.histoireService
      .getHistoireById(this.idHistoire)
      .subscribe((histoire) => {
        this.histoire = histoire;
      });
  }
}
