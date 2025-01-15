import { Component, NgModule } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Histoire } from '../../model/histoire';
import { HistoireService } from '../../service/histoire.service';
import { CategorieHistoire } from '../../model/categorie-histoire';
import { CategorieAge } from '../../model/categorie-age';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stories-page',
  imports: [CardComponent, FormsModule],
  templateUrl: './stories-page.component.html',
  styleUrl: './stories-page.component.css',
  standalone: true,
})
export class StoriesPageComponent {
  histoires: Histoire[] = [];
  categorieHistoireSelected: CategorieHistoire[] = [];
  categorieAgeSelected: CategorieAge[] = [];

  categoriePirate: CategorieHistoire = CategorieHistoire.Pirate;
  categorieFantastique: CategorieHistoire = CategorieHistoire.Fantastique;
  categorieFarWest: CategorieHistoire = CategorieHistoire.FarWest;
  categorieMedieval: CategorieHistoire = CategorieHistoire.Medieval;
  categorieFuturiste: CategorieHistoire = CategorieHistoire.Futuriste;
  categorieSpacial: CategorieHistoire = CategorieHistoire.Spacial;

  categorieDeuxTroisAns: CategorieAge = CategorieAge.DeuxTroisAns;
  categorieQuatreCinqAns: CategorieAge = CategorieAge.QuatreCinqAns;
  categorieSixSeptAns: CategorieAge = CategorieAge.SixSeptAns;
  categorieHuitNeufAns: CategorieAge = CategorieAge.HuitNeufAns;
  categorieDixOnzeAns: CategorieAge = CategorieAge.DixOnzeAns;

  histoiresFiltrees: Histoire[] = [];

  isFiltresHidden: boolean = true;
  isLoad: boolean = false;

  motRecherche: string = '';

  constructor(
    private histoireService: HistoireService,
    private router: Router
  ) {
    histoireService.getAllHistoireSortedByLike().subscribe((histoires) => {
      this.histoires = histoires;
      this.isLoad = true;
    });
  }

  filtrer(): Histoire[] {
    if (
      this.categorieHistoireSelected.length === 0 &&
      this.categorieAgeSelected.length === 0 &&
      this.motRecherche === ''
    ) {
      return this.histoires; // Retourne toute la liste si pas de filtre appliqué
    } else {
      return this.histoires.filter((histoire) =>
        /*
          (this.categorieHistoireSelected.includes(
            histoire.categorieHistoire
          ) &&
            this.categorieAgeSelected.includes(histoire.categorieAge)) ||
          histoire.titre.toLowerCase().includes(this.motRecherche.toLowerCase())
        */
        {
          const categorieHistoireMatch =
            this.categorieHistoireSelected.length === 0 ||
            this.categorieHistoireSelected.includes(histoire.categorieHistoire);

          const categorieAgeMatch =
            this.categorieAgeSelected.length === 0 ||
            this.categorieAgeSelected.includes(histoire.categorieAge);

          const motRechercheMatch =
            this.motRecherche.trim() === '' ||
            (histoire.titre &&
              histoire.titre
                .toLowerCase()
                .includes(this.motRecherche.toLowerCase()));

          // Retourne l'histoire si toutes les conditions sont remplies
          return (
            categorieHistoireMatch && categorieAgeMatch && motRechercheMatch
          );
        }
      );
    }
  }

  onCategorieHistoireChange(
    categorieHistoire: CategorieHistoire,
    event: Event
  ): void {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;
    if (isChecked) {
      this.categorieHistoireSelected.push(categorieHistoire);
    } else {
      const index = this.categorieHistoireSelected.indexOf(categorieHistoire);
      if (index >= 0) {
        this.categorieHistoireSelected.splice(index, 1);
      }
    }
  }

  onCategorieAgeChange(categorieAge: CategorieAge, event: Event): void {
    const target = event.target as HTMLInputElement;
    const isChecked = target.checked;
    if (isChecked) {
      this.categorieAgeSelected.push(categorieAge);
    } else {
      const index = this.categorieAgeSelected.indexOf(categorieAge);
      if (index >= 0) {
        this.categorieAgeSelected.splice(index, 1);
      }
    }
  }

  toggleVisibilityFiltres() {
    this.isFiltresHidden = !this.isFiltresHidden;
  }

  goHistoire(id: number) {
    this.router.navigate(['/read/', id]);
  }
}
