import { Component, OnInit } from "@angular/core";
import { Histoire } from "../../model/histoire";

@Component({
  selector: "app-card",
  standalone: true,
  imports: [],
  templateUrl: "./card.component.html",
  styleUrl: "./card.component.css"
})
export class CardComponent implements OnInit {
  histoire : Histoire [] = [{
    0, "la belle", "il était une fois", "fantastique", "2_4", "image_histoire", 26, "Utilisateur"
  }]
  constructor(histoire: Histoire) {

  }

  ngOnInit(): void {}
}
