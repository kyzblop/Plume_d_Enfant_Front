import { Component } from "@angular/core";
import { CardComponent } from "../card/card.component";

@Component({
  selector: "app-profil-page",
  standalone: true,
  imports: [CardComponent],
  templateUrl: "./profil-page.component.html",
  styleUrl: "./profil-page.component.css"
})
export class ProfilPageComponent {}
