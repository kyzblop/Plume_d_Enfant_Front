import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Histoire } from '../model/histoire';
import { FormulaireHistoire } from '../model/formulaire-histoire';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class HistoireService {
  // readonly apiUrl = 'https://plumedenfant-production.up.railway.app';
  readonly apiUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) {}

  // Méthode pour récupérer une histoire par son id
  getHistoireById(idHistoire: number): Observable<Histoire> {
    return this.http.get<Histoire>(`${this.apiUrl}/histoires/${idHistoire}`);
  }

  // Méthode pour récupérer toutes les histoires
  getAllHistoire(): Observable<Histoire[]> {
    return this.http.get<Histoire[]>(`${this.apiUrl}/histoires`);
  }

  // Méthode pour récupérer la dernière histoire
  getLastHistoire(): Observable<Histoire> {
    return this.http.get<Histoire>(`${this.apiUrl}/histoires/last`);
  }

  // Méthode pour récupérer la liste d'histoires créées par une personne
  getVosHistoireCrees(idUtilisateur: number): Observable<Histoire[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError('Token manquant');
    }
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    return this.http
      .get<Histoire[]>(`${this.apiUrl}/histoires/${idUtilisateur}/crees`, {
        headers: headers,
      })
      .pipe(
        tap((response: any) => {
          console.log('Statut HTTP:', response.status);
          console.log('Corps de la réponse:', response.body);
        })
      );
  }

  // Méthode pour demander la génération d'histoire à partir du formulaire
  insertHistoire(formulaire: FormulaireHistoire): Observable<string> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError('Token manquant');
    }
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    // const jsonFormulaire = JSON.stringify(formulaire);
    console.log(headers);
    console.log('Formulaire dans le service : ' + JSON.stringify(formulaire));

    return this.http
      .post<string>(`${this.apiUrl}/histoires/creation`, formulaire, {
        headers: headers,
        observe: 'response',
      })
      .pipe(
        tap((response: any) => {
          console.log('Statut HTTP:', response.status);
          console.log('Corps de la réponse:', response.body);
        })
      );
  }

  // Méthode pour modifier une histoire
  updateHistoire(histoire: Histoire, idHistoire: number): Observable<string> {
    return this.http.patch<string>(
      `${this.apiUrl}/histoires/modification/${idHistoire}`,
      histoire
    );
  }

  //Méthode pour supprimer une histoire
  deleteHistoire(idHistoire: number): Observable<string> {
    return this.http.delete<string>(`${this.apiUrl}/histoires/${idHistoire}`);
  }
}
