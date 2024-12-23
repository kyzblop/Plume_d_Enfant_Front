import { Routes } from '@angular/router';
import { AdminPageComponent } from './components/admin-page/admin-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CreatePageComponent } from './components/create-page/create-page.component';
import { StoriesPageComponent } from './components/stories-page/stories-page.component';
import { ProfilPageComponent } from './components/profil-page/profil-page.component';
import { StoryGeneratedPageComponent } from './components/story-generated-page/story-generated-page.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthGuard } from './guard/auth-guard';
import { AdminGuard } from './guard/admin-guard';

export const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'create', component: CreatePageComponent, canActivate: [AuthGuard] },
  { path: 'stories', component: StoriesPageComponent },
  { path: 'profil', component: ProfilPageComponent, canActivate: [AuthGuard] },
  { path: 'read/:id', component: StoryGeneratedPageComponent },
  { path: 'admin', component: AdminPageComponent, canActivate: [AdminGuard] },
  { path: '404', component: NotFoundComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', redirectTo: '404' },
];
