import { Component, Input } from '@angular/core';
import { CategorieAge } from '../../model/categorie-age';

@Component({
  selector: 'app-cat-age',
  imports: [],
  templateUrl: './cat-age.component.html',
  styleUrl: './cat-age.component.css',
  standalone: true,
})
export class CatAgeComponent {
  @Input()
  categorie: CategorieAge = CategorieAge.DeuxTroisAns;

  getColor() {
    switch (this.categorie) {
      case CategorieAge.DeuxTroisAns:
        return 'color: rgb(13, 216, 216);';
      case CategorieAge.QuatreCinqAns:
        return 'color: rgb(24, 223, 28);';
      case CategorieAge.SixSeptAns:
        return 'color: rgb(207, 220, 19);';
      case CategorieAge.HuitNeufAns:
        return 'color: rgb(220, 133, 19);';
      case CategorieAge.DixOnzeAns:
        return 'color: rgb(201, 23, 23);';
      default:
        return 'color: rgb(13, 216, 216);';
    }
  }

  getCategorieTexte() {
    switch (this.categorie) {
      case CategorieAge.DeuxTroisAns:
        return '2 - 3 ans';
      case CategorieAge.QuatreCinqAns:
        return '4 - 5 ans';
      case CategorieAge.SixSeptAns:
        return '6 - 7 ans';
      case CategorieAge.HuitNeufAns:
        return '8 - 9 ans';
      case CategorieAge.DixOnzeAns:
        return '10 - 11 ans';
      default:
        return '2 - 3 ans';
    }
  }
}
