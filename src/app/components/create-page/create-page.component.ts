import { CommonModule, NgFor } from "@angular/common";
import { Component } from "@angular/core";
import { FormsModule, NgForm } from "@angular/forms";

@Component({
  selector: "app-create-page",
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: "./create-page.component.html",
  styleUrl: "./create-page.component.css"
})
export class CreatePageComponent {
  prenomPrincipal: string = "";
  prenomSecondaire: string = "";
  detailPrincipal: string = "";
  detailSecondaire: string = "";
  detailSupp1: string = "";
  detailSupp2: string = "";
  detailSupp3: string = "";
  detailSupp4: string = "";
  category: string = "Aléatoire";
  age: any;
  personnagesSecondaires: any;

  prenomSecondaire1: any;
  prenomSecondaire2: any;
  relationSecondaire2: any;
  relationPrincipale1: any;

  onSubmit(storyForm: NgForm) {
    console.log(storyForm.value);
    storyForm.reset();

    // AddCharacter () {

    // }
  }
}
