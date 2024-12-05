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
export class NavComponent implements OnInit {
  isLoggedIn: boolean = false;

  loginDto: LoginDto = { email: '', mdp: '' };
  signupDto: InscriptionDto = { email: '', mdp: '' };

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  // Soumission du formulaire d'inscription
  onSignupSubmit() {
    this.authService.register(this.signupDto).subscribe({
      next: () => {
        console.log('Connexion reussie');
      },
      error: (err) => {
        console.error('Connexion echouée : ' + err);
      },
    });

    const modalElement = document.getElementById('signupModal');
    const modal = bootstrap.Modal.getInstance(modalElement);
    modal.hide();
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

    // location.reload();
  }

  goProfil() {
    this.router.navigate(['profil']);
  }
}
