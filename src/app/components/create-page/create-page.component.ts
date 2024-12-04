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
    private authService: AuthService
  ) {}

  prenomPersoPrincipal: string = '';
  detailPersoPrincipal: string = '';

  personnagesSecondaires: PersonnageSecondaire[] = [
    new PersonnageSecondaire('', '', LienEntrePersonnages.Ami),
    new PersonnageSecondaire('', '', LienEntrePersonnages.Amoureux),
    new PersonnageSecondaire('', '', LienEntrePersonnages.Animal),
  ];

  categorieHistoire: CategorieHistoire = CategorieHistoire.Fantastique;
  categorieAge: CategorieAge = CategorieAge.DeuxTroisAns;
  detail1: string = '';
  detail2: string = '';
  detail3: string = '';
  detail4: string = '';

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
      this.categorieHistoire,
      this.categorieAge,
      this.prenomPersoPrincipal,
      this.detailPersoPrincipal,
      this.personnagesSecondaires,
      [this.detail1, this.detail2, this.detail3, this.detail4]
    );

    this.formulaire.idCreateur = this.authService.getUserId();
    console.log(this.authService.getUserRoles());
    console.log(this.formulaire);
    this.histoireService.insertHistoire(this.formulaire);
  }

  addPersonnageSecondaire() {
    this.personnagesSecondaires.push(
      new PersonnageSecondaire('', '', LienEntrePersonnages.Camarade)
    );
  }
}
