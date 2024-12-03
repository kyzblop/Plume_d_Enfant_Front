import { Component, Input, OnInit } from "@angular/core";
import { Histoire } from "../../model/histoire";
import { CategorieHistoire } from "../../model/categorie-histoire";
import { CategorieAge } from "../../model/categorie-age";
import { Utilisateur } from "../../model/utilisateur";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css"
})
export class CardComponent implements OnInit {
  @Input()
  histoire: Histoire = new Histoire(
    "0",
    "la belle",
    "il était une fois",
    CategorieHistoire.Fantastique,
    CategorieAge.DeuxTroisAns,
    "image_histoire",
    26,
    new Utilisateur("1", "utilisateur@example.com", "password", [], [])
  );
  constructor() {}

  ngOnInit(): void {}
}
