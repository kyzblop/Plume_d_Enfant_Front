import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";
import { Histoire } from "../../model/histoire";

@Component({
  selector: "app-stories-page",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./stories-page.component.html",
  styleUrl: "./stories-page.component.css"
})
export class StoriesPageComponent {
  histoires: Histoire[] = [];
}
