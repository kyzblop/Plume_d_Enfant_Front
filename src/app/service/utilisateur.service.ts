import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class UtilisateurService {
  readonly apiUrl = 'http://localhost:8080';

  constructor(public http: HttpClient) {}

  // Méthode pour récupérer un utilisateur par son id
  getUtilisateurById(idUtilisateur: number): Observable<Utilisateur> {
    return this.http.get<Utilisateur>(
      `${this.apiUrl}/utilisateurs/${idUtilisateur}`
    );
  }

  // Méthode pour récupérer tous les utilisateurs
  getAllUtilisateur(): Observable<Utilisateur[]> {
    return this.http.get<Utilisateur[]>(`${this.apiUrl}/utilisateurs`);
  }

  // Méthode pour modifier un utilisateur
  updateHitoire(
    utilisateur: Utilisateur,
    idUtilisateur: number
  ): Observable<string> {
    return this.http.patch<string>(
      `${this.apiUrl}/utilisateurs/modification/${idUtilisateur}`,
      utilisateur
    );
  }

  //Méthode pour supprimer un utilisateur
  deleteUtilisateur(idUtilisateur: number): Observable<string> {
    return this.http.delete<string>(
      `${this.apiUrl}/utilisateurs/${idUtilisateur}`
    );
  }
}
