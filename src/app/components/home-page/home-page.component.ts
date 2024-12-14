import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Router, RouterLink } from '@angular/router';
import { Histoire } from '../../model/histoire';
import { HistoireService } from '../../service/histoire.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-home-page',
  imports: [CardComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
  standalone: true,
})
export class HomePageComponent {
  histoires: Histoire[] = [];
  isConnected: boolean;
  dernieresLectures: Histoire[] = [];

  constructor(
    private histoireService: HistoireService,
    private authService: AuthService,
    private router: Router
  ) {
    histoireService.getAllHistoire().subscribe((histoires) => {
      this.histoires = histoires;
    });

    this.isConnected = authService.isAuthenticated();
  }

  goHistoire(id: number) {
    this.router.navigate(['/read/', id]);
  }
}
