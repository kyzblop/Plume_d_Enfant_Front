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
  createur: Utilisateur = new Utilisateur(1, "mail@mail.com", "truc", [], []);
  histoire: Histoire = new Histoire(
    1,
    "Le baton du ciel",
    "IL était une fois, un baton",
    CategorieHistoire.Fantastique,
    CategorieAge.HuitNeufAns,
    "",
    1,
    this.createur
  );

  constructor(histoire: Histoire) {}

  ngOnInit(): void {}
}
