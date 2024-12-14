import { Component, Input } from '@angular/core';
import { CategorieHistoire } from '../../model/categorie-histoire';

@Component({
  selector: 'app-cat-histoire',
  imports: [],
  templateUrl: './cat-histoire.component.html',
  styleUrl: './cat-histoire.component.css',
  standalone: true,
})
export class CatHistoireComponent {
  @Input()
  categorie: CategorieHistoire = CategorieHistoire.Fantastique;

  getCategorieImageUrl() {
    switch (this.categorie) {
      case CategorieHistoire.Fantastique:
        return '/assets/images/CategorieHistoire/icon_sorciere.png';
      case CategorieHistoire.FarWest:
        return '/assets/images/CategorieHistoire/icon_farWest.png';
      case CategorieHistoire.Medieval:
        return '/assets/images/CategorieHistoire/icon_medieval.png';
      case CategorieHistoire.Spacial:
        return '/assets/images/CategorieHistoire/icon_spacial.png';
      case CategorieHistoire.Futuriste:
        return '/assets/images/CategorieHistoire/icon_robot.png';
      case CategorieHistoire.Pirate:
        return '/assets/images/CategorieHistoire/icon_pirate.png';
      default:
        return '/assets/images/CategorieHistoire/icon_sorciere.png';
    }
  }

  getCategorieTexte() {
    switch (this.categorie) {
      case CategorieHistoire.Fantastique:
        return 'Fantastique';
      case CategorieHistoire.FarWest:
        return 'Far-West';
      case CategorieHistoire.Medieval:
        return 'Médieval';
      case CategorieHistoire.Spacial:
        return 'Spacial';
      case CategorieHistoire.Futuriste:
        return 'Futuriste';
      case CategorieHistoire.Pirate:
        return 'Pirate';
      default:
        return 'Fantastique';
    }
  }
}
