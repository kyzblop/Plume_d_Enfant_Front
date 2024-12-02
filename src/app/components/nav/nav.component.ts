import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink, UrlTree } from '@angular/router';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatButtonModule, CommonModule, RouterLink, FormsModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {


 // Variables pour stocker les données des formulaires
 signupEmail: string = '';
 signupPassword: string = '';
 loginEmail: string = '';
 loginPassword: string = '';
 isLoggedIn: boolean = false; // Faux par défaut (utilisateur non connecté)



 // Soumission du formulaire d'inscription
 onSignupSubmit() {
   console.log('Inscription réussie avec :', this.signupEmail, this.signupPassword);
   alert('Inscription réussie !');
   this.toggleLogin();
   this.resetForms();
 }

 // Soumission du formulaire de connexion
 onLoginSubmit() {
   console.log('Connexion réussie avec :', this.loginEmail, this.loginPassword);
   alert('Connexion réussie !');
   this.toggleLogin();
   this.resetForms();
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







