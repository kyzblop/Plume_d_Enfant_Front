import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { StoriesPageComponent } from './components/stories-page/stories-page.component';
import { StoryGeneratedPageComponent } from './components/story-generated-page/story-generated-page.component';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { NavComponent } from './components/nav/nav.component';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NavComponent,
    HomePageComponent,
    CreatePageComponent,
    StoriesPageComponent,
    StoryGeneratedPageComponent,
    AdminPageComponent,
    ProfilPageComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'plumedEnfant_Front';
}
