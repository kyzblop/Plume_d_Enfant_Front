import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-stories-page",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./stories-page.component.html",
  styleUrl: "./stories-page.component.css"
})
export class StoriesPageComponent {}
