import { Component, Input, OnInit } from '@angular/core';
import { Histoire } from '../../model/histoire';
import { CategorieHistoire } from '../../model/categorie-histoire';
import { CategorieAge } from '../../model/categorie-age';
import { Utilisateur } from '../../model/utilisateur';
import { CatHistoireComponent } from '../cat-histoire/cat-histoire.component';
import { CatAgeComponent } from '../cat-age/cat-age.component';

@Component({
  selector: 'app-card',
  imports: [CatHistoireComponent, CatAgeComponent],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
  standalone: true,
})
export class CardComponent {
  createur: Utilisateur = new Utilisateur(
    1,
    'mail@mail.com',
    'truc',
    [],
    [],
    []
  );

  @Input()
  histoire: Histoire = new Histoire(
    1,
    'Le baton du ciel',
    'IL était une fois, un baton',
    CategorieHistoire.Fantastique,
    CategorieAge.HuitNeufAns,
    '',
    1,
    this.createur
  );

  constructor() {}
}
