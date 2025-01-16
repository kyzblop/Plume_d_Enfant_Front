import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Router, RouterLink } from '@angular/router';
import { Histoire } from '../../model/histoire';
import { HistoireService } from '../../service/histoire.service';
import { AuthService } from '../../service/auth.service';
import { Subscription } from 'rxjs';
import { UtilisateurService } from '../../service/utilisateur.service';

@Component({
  selector: 'app-home-page',
  imports: [CardComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: true,
})
export class HomePageComponent implements OnInit {
  histoires: Histoire[] = [];
  isLoggedIn: boolean = false;
  dernieresLectures: Histoire[] = [];

  isLoad: boolean = false;
  listVues: Array<Histoire> | null = [];

  private authSubscription: Subscription | null = null;

  constructor(
    private histoireService: HistoireService,
    private authService: AuthService,
    private router: Router,
    private utilisateurService: UtilisateurService
  ) {}

  ngOnInit(): void {
    this.histoireService.getAllHistoireSortedByLike().subscribe((histoires) => {
      this.histoires = histoires;
      this.isLoad = true;
    });

    this.authSubscription = this.authService.isAuthObservable.subscribe(
      (authStatut) => {
        this.isLoggedIn = authStatut;
      }
    );
  }

  goHistoire(id: number) {
    this.router.navigate(['/read/', id]);
  }
}
