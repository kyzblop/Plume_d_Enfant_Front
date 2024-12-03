import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-profil-page',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './profil-page.component.html',
  styleUrl: './profil-page.component.css',
})
export class ProfilPageComponent {
  constructor(private router: Router, private authService: AuthService) {}

  seDeconnecter() {
    this.authService.logout();
    this.router.navigate(['home']);
  }
}
