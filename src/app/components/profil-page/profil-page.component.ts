import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { HistoireService } from '../../service/histoire.service';
import { Histoire } from '../../model/histoire';

@Component({
  selector: 'app-profil-page',
  imports: [CardComponent],
  templateUrl: './profil-page.component.html',
  styleUrl: './profil-page.component.css',
  standalone: true,
})
export class ProfilPageComponent {
  listVosHistoiresCrees: Histoire[] = [];

  constructor(
    private router: Router,
    private authService: AuthService,
    private histoireService: HistoireService
  ) {
    histoireService
      .getVosHistoireCrees(authService.getUserId())
      .subscribe((histoires) => {
        this.listVosHistoiresCrees = histoires;
      });
  }

  seDeconnecter() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
