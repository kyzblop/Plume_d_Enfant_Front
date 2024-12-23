import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { Histoire } from '../../model/histoire';
import { Utilisateur } from '../../model/utilisateur';
import { HistoireService } from '../../service/histoire.service';
import { UtilisateurService } from '../../service/utilisateur.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-admin-page',
  imports: [],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css',
  standalone: true,
})
export class AdminPageComponent implements OnInit, OnDestroy {
  listHistoire: Histoire[] = [];
  listUtilisateur: Utilisateur[] = [];

  private listUtilisateurSubscription: Subscription | null = null;

  constructor(
    private router: Router,
    private authService: AuthService,
    private histoireService: HistoireService,
    private utilisateurService: UtilisateurService
  ) {}

  seDeconnecter() {
    this.authService.logout();
    this.router.navigate(['home']);
  }

  ngOnInit(): void {
    this.histoireService.getAllHistoire().subscribe((histoires) => {
      this.listHistoire = histoires;
    });

    this.listUtilisateurSubscription = this.utilisateurService
      .getAllUtilisateur()
      .subscribe((utilisateurs) => {
        this.listUtilisateur = utilisateurs;
      });
  }

  ngOnDestroy(): void {
    if (this.listUtilisateurSubscription) {
      this.listUtilisateurSubscription.unsubscribe();
    }
  }

  deleteUser(idUtilisateur: number) {
    console.log('clique' + idUtilisateur);
    this.utilisateurService.deleteUtilisateur(idUtilisateur).subscribe(() => {
      this.listUtilisateurSubscription = this.utilisateurService
        .getAllUtilisateur()
        .subscribe((utilisateurs) => {
          this.listUtilisateur = utilisateurs;
        });
    });
  }
}
