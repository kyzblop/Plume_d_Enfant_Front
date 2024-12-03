import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { RouterLink } from '@angular/router';
import { Histoire } from '../../model/histoire';
import { HistoireService } from '../../service/histoire.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CardComponent, RouterLink],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent {
  histoires: Histoire[] = [];
  isConnected: boolean;
  dernieresLectures: Histoire[] = [];

  constructor(
    private histoireService: HistoireService,
    private authService: AuthService
  ) {
    histoireService.getAllHistoire().subscribe((histoires) => {
      this.histoires = histoires;
    });

    this.isConnected = authService.isAuthenticated();
  }
}
