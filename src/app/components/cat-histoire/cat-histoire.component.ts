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
        return '/Plume_d_Enfant_Front/assets/images/CategorieHistoire/icon_sorciere.png';
      case CategorieHistoire.FarWest:
        return '/Plume_d_Enfant_Front/assets/images/CategorieHistoire/icon_farWest.png';
      case CategorieHistoire.Medieval:
        return '/Plume_d_Enfant_Front/assets/images/CategorieHistoire/icon_medieval.png';
      case CategorieHistoire.Spacial:
        return '/Plume_d_Enfant_Front/assets/images/CategorieHistoire/icon_spacial.png';
      case CategorieHistoire.Futuriste:
        return '/Plume_d_Enfant_Front/assets/images/CategorieHistoire/icon_robot.png';
      case CategorieHistoire.Pirate:
        return '/Plume_d_Enfant_Front/assets/images/CategorieHistoire/icon_pirate.png';
      default:
        return '/Plume_d_Enfant_Front/assets/images/CategorieHistoire/icon_sorciere.png';
    }
  }

  getCategorieTexte() {
    switch (this.categorie) {
      case CategorieHistoire.Fantastique:
        return 'Conte de fée';
      case CategorieHistoire.FarWest:
        return 'Cowboy';
      case CategorieHistoire.Medieval:
        return 'Chevalier';
      case CategorieHistoire.Spacial:
        return 'Espace';
      case CategorieHistoire.Futuriste:
        return 'Future';
      case CategorieHistoire.Pirate:
        return 'Pirate';
      default:
        return 'Conte de fée';
    }
  }
}
