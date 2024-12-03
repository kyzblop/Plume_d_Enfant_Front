import { Component } from "@angular/core";
import { Histoire } from "../../model/histoire";

@Component({
  selector: "app-story-generated-page",
  standalone: true,
  imports: [],
  templateUrl: "./story-generated-page.component.html",
  styleUrl: "./story-generated-page.component.css"
})
export class StoryGeneratedPageComponent {
  histoires: Histoire[] = [];
}
