import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, throwError } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  readonly apiUrl = 'https://plumedenfant.onrender.com';
  //readonly apiUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) {}

  // Méthode pour récupérer un utilisateur par son id
  getUtilisateurById(idUtilisateur: number): Observable<Utilisateur> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError('Token manquant');
    }
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    return this.http.get<Utilisateur>(
      `${this.apiUrl}/utilisateurs/${idUtilisateur}`,
      {
        headers: headers,
      }
    );
  }

  // Méthode pour récupérer tous les utilisateurs
  getAllUtilisateur(): Observable<Utilisateur[]> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError('Token manquant');
    }
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');

    return this.http.get<Utilisateur[]>(`${this.apiUrl}/utilisateurs`, {
      headers: headers,
    });
  }

  // Méthode pour modifier un utilisateur
  updateUtilisateur(
    utilisateur: Utilisateur,
    idUtilisateur: number
  ): Observable<string> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError('Token manquant');
    }
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');
    return this.http.patch<string>(
      `${this.apiUrl}/utilisateurs/modification/${idUtilisateur}`,
      utilisateur,
      {
        headers: headers,
      }
    );
  }

  //Méthode pour supprimer un utilisateur
  deleteUtilisateur(idUtilisateur: number): Observable<string> {
    const token = localStorage.getItem('token');
    if (!token) {
      return throwError('Token manquant');
    }
    const headers = new HttpHeaders()
      .set('Authorization', `Bearer ${token}`)
      .set('Content-Type', 'application/json');
    return this.http.delete<string>(
      `${this.apiUrl}/utilisateurs/${idUtilisateur}`,
      {
        headers: headers,
        responseType: 'text' as 'json',
      }
    );
  }
}
