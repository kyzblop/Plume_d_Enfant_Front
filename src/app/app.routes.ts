import { Routes } from "@angular/router";
import { AdminPageComponent } from "./components/admin-page/admin-page.component";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { CreatePageComponent } from "./components/create-page/create-page.component";
import { StoriesPageComponent } from "./components/stories-page/stories-page.component";
import { ProfilPageComponent } from "./components/profil-page/profil-page.component";
import { StoryGeneratedPageComponent } from "./components/story-generated-page/story-generated-page.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "create", component: CreatePageComponent },
  { path: "stories", component: StoriesPageComponent },
  { path: "profil", component: ProfilPageComponent },
  { path: "story-generated", component: StoryGeneratedPageComponent },
  { path: "admin", component: AdminPageComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" }
];
