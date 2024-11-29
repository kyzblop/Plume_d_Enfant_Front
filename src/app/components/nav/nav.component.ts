import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatButtonModule, CommonModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent {

// Variable pour suivre l'état du mode sombre
isDarkMode = false;

// Fonction pour basculer entre le mode sombre et clair
toggleTheme() {
  this.isDarkMode = !this.isDarkMode;
  if (this.isDarkMode) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }
}

}
