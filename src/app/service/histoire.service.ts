import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Histoire } from "../model/histoire";
import { FormulaireHistoire } from "../model/formulaire-histoire";

@Injectable({
  providedIn: "root"
})
export class HistoireService {
  readonly apiUrl = "http://localhost:8080";
  readonly http = inject(HttpClient);

  constructor() {}

  // Méthode pour récupérer une histoire par son id
  getHistoireById(idHistoire: number): Observable<Histoire> {
    return this.http.get<Histoire>(`${this.apiUrl}/histoires/${idHistoire}`);
  }

  // Méthode pour récupérer toutes les histoires
  getAllHistoire(): Observable<Histoire[]> {
    return this.http.get<Histoire[]>(`${this.apiUrl}/histoires`);
  }

  // Méthode pour demander la génération d'histoire à partir du formulaire
  insertHistoire(formulaire: FormulaireHistoire): Observable<String> {
    return this.http.post<String>(
      `${this.apiUrl}/histoires/creation`,
      formulaire
    );
  }

  // Méthode pour modifier une histoire
  updateHistoire(histoire: Histoire, idHistoire: number): Observable<String> {
    return this.http.patch<String>(
      `${this.apiUrl}/histoires/modification/${idHistoire}`,
      histoire
    );
  }

  //Méthode pour supprimer une histoire
  deleteHistoire(idHistoire: number): Observable<String> {
    return this.http.delete<String>(`${this.apiUrl}/histoires/${idHistoire}`);
  }
}
