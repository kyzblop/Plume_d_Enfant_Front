import { Component, createComponent } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomePageComponent } from "./components/home-page/home-page.component";
import { CreatePageComponent } from "./components/create-page/create-page.component";
import { StoriesPageComponent } from "./components/stories-page/stories-page.component";
import { StoryGeneratedPageComponent } from "./components/story-generated-page/story-generated-page.component";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    CreatePageComponent,
    StoriesPageComponent,
    StoryGeneratedPageComponent
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.css"
})
export class AppComponent {
  title = "plumedEnfant_Front";
}
