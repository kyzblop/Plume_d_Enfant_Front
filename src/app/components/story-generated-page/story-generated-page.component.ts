import { Component, OnInit } from '@angular/core';
import { Histoire } from '../../model/histoire';
import { CategorieHistoire } from '../../model/categorie-histoire';
import { CategorieAge } from '../../model/categorie-age';
import { HistoireService } from '../../service/histoire.service';
import { Utilisateur } from '../../model/utilisateur';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-story-generated-page',
  standalone: true,
  imports: [],
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

  constructor(
    private histoireService: HistoireService,
    private route: ActivatedRoute
  ) {
    this.promesseGetHistoire = new Promise((resolve, reject) => {
      try {
        this.getHistoire();
        resolve("L'histoire est bien récupérée");
      } catch (error) {
        reject("L'histoire n'est pas récupérée");
      }
    });
  }

  ngOnInit(): void {
    this.idHistoire = this.route.snapshot.paramMap.get('id');
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
}
