import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { HistoireService } from '../../service/histoire.service';
import { Histoire } from '../../model/histoire';
import { UtilisateurService } from '../../service/utilisateur.service';

@Component({
  selector: 'app-profil-page',
  imports: [CardComponent],
  templateUrl: './profil-page.component.html',
  styleUrl: './profil-page.component.css',
  standalone: true,
})
export class ProfilPageComponent {
  listVosHistoiresCrees: Histoire[] = [];

  listFavori: Array<Histoire> | null = [];
  listLike: Array<Histoire> | null = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private histoireService: HistoireService,
    private utilisateurService: UtilisateurService
  ) {
    histoireService
      .getVosHistoireCrees(authService.getUserId())
      .subscribe((histoires) => {
        this.listVosHistoiresCrees = histoires;
      });

    utilisateurService
      .getUtilisateurById(authService.getUserId())
      .subscribe((utilisateur) => {
        this.listFavori = utilisateur.listeFavori;
        this.listLike = utilisateur.listeLike;
      });
  }

  seDeconnecter() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
