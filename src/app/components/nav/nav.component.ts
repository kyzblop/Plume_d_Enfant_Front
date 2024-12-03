import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, UrlTree } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { LoginDto } from '../../model/login-dto';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    MatButtonModule,
    CommonModule,
    RouterLink,
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  // Variables pour stocker les données des formulaires
  
  signupEmail: string = '';
  signupPassword: string = '';
  loginEmail: string = '';
  loginPassword: string = '';
  
  isLoggedIn: boolean = false; // Faux par défaut (utilisateur non connecté)

  loginForm: FormGroup;
  signupForm: FormGroup;

  constructor(public authService: AuthService) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      mdp: new FormControl('', [Validators.required]),
    });

    this.signupForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      mdp: new FormControl('', [Validators.required]),
    });
  }

  // Soumission du formulaire d'inscription
  onSignupSubmit() {
    if (this.signupForm.valid) {
      this.authService.login(
        new LoginDto(
          this.loginForm.get('email')?.value,
          this.loginForm.get('mdp')?.value
        )
      );
    }
    alert('Inscription réussie !');
    this.toggleLogin();
    // this.resetForms();
  }

  // Soumission du formulaire de connexion
  onLoginSubmit() {
    if (this.loginForm.valid) {
      this.authService.login(
        new LoginDto(
          this.loginForm.get('email')?.value,
          this.loginForm.get('mdp')?.value
        )
      );
    }

    this.toggleLogin();
    // this.resetForms();
  }

  // Réinitialiser les données des formulaires
  
  resetForms() {
    this.signupEmail = '';
    this.signupPassword = '';
    this.loginEmail = '';
    this.loginPassword = '';
  }

  // methode pour simuler la cx/decx
  toggleLogin() {
    this.isLoggedIn = !this.isLoggedIn;
  }
}
