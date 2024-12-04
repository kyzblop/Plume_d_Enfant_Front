import { CommonModule, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { PersonnageSecondaire } from '../../model/personnage-secondaire';
import { CategorieHistoire } from '../../model/categorie-histoire';
import { CategorieAge } from '../../model/categorie-age';
import { LienEntrePersonnages } from '../../model/lien-entre-personnages';
import { HistoireService } from '../../service/histoire.service';
import { FormulaireHistoire } from '../../model/formulaire-histoire';
import { AuthService } from '../../service/auth.service';
import { response } from 'express';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-page',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './create-page.component.html',
  styleUrl: './create-page.component.css',
})
export class CreatePageComponent {
  constructor(
    private histoireService: HistoireService,
    private authService: AuthService,
    private router: Router
  ) {}

  personnagesSecondaires: PersonnageSecondaire[] = [
    new PersonnageSecondaire('', '', LienEntrePersonnages.Ami),
  ];

  categorieHistoire: CategorieHistoire = CategorieHistoire.Fantastique;
  categorieAge: CategorieAge = CategorieAge.DeuxTroisAns;

  formulaire: FormulaireHistoire = new FormulaireHistoire(
    0,
    CategorieHistoire.Fantastique,
    CategorieAge.DeuxTroisAns,
    '',
    '',
    [],
    []
  );

  onSubmit(storyForm: NgForm) {
    console.log('Formulaire soumis');
    this.formulaire = new FormulaireHistoire(
      0,
      storyForm.value.category,
      storyForm.value.age,
      storyForm.value.prenomPrincipal,
      storyForm.value.detailPrincipal,
      this.personnagesSecondaires,
      [
        storyForm.value.detailSupp1 || '',
        storyForm.value.detailSupp2 || '',
        storyForm.value.detailSupp3 || '',
        storyForm.value.detailSupp4 || '',
      ]
    );

    this.formulaire.idCreateur = this.authService.getUserId();
    console.log(this.authService.getUserRoles());
    console.log(this.formulaire);
    this.histoireService.insertHistoire(this.formulaire).subscribe({
      next: (response: any) => {
        console.log(response);
        this.histoireService.getLastHistoire().subscribe((histoire) => {
          this.router.navigate(['read/' + histoire.id]);
        });
      },
      error: (err) => {
        console.error('insert failed', err);
      },
    });

    this.showChargement();
  }

  addPersonnageSecondaire() {
    this.personnagesSecondaires.push(
      new PersonnageSecondaire('', '', LienEntrePersonnages.Camarade)
    );
  }

  showChargement() {
    (document.getElementById('barreChargement') as HTMLElement).style.display =
      'block';
  }
}
