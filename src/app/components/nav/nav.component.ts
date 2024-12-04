import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterLink, UrlTree } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { LoginDto } from '../../model/login-dto';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionDto } from '../../model/inscription-dto';

declare var bootstrap: any;

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [AuthService],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  isLoggedIn: boolean = false;

  loginDto: LoginDto = { email: '', mdp: '' };
  signupDto: InscriptionDto = { email: '', mdp: '' };

  constructor(private authService: AuthService, private router: Router) {}

  // Soumission du formulaire d'inscription
  onSignupSubmit() {
    this.authService.register(this.signupDto).subscribe({
      next: () => {
        console.log('Connexion reussie');
        this.isLoggedIn = true;
      },
      error: (err) => {
        console.error('Connexion echouée : ' + err);
        this.isLoggedIn = false;
      },
    });

    const modalElement = document.getElementById('signupModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    location.reload();
  }

  // Soumission du formulaire de connexion
  onLoginSubmit() {
    this.authService.login(this.loginDto).subscribe({
      next: () => {
        console.log('Connexion reussie');
      },
      error: (err) => {
        console.error('Connexion echouée');
        alert('Adresse mail ou mot de passe erronés');
      },
    });

    const modalElement = document.getElementById('loginModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();

    location.reload();
  }

  goProfil() {
    this.router.navigate(['profil']);
  }
}
