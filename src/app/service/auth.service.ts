import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { AuthResponseDto } from '../model/auth-response-dto';
import { LoginDto } from '../model/login-dto';
import { InscriptionDto } from '../model/inscription-dto';
import { Utilisateur } from '../model/utilisateur';
import { response } from 'express';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly apiUrl = 'http://localhost:8080';
  readonly http = inject(HttpClient);

  constructor() {}

  // Méthode pour se login
  login(loginDto: LoginDto): Observable<AuthResponseDto> {
    return this.http
      .post<{ accessToken: string }>(`${this.apiUrl}/auth/login`, loginDto)
      .pipe(
        tap((response: { accessToken: string }) => {
          localStorage.setItem('token', response.accessToken);
        })
      );
  }

  // Méthode pour enregistrer un utilisateur
  register(inscriptionDto: InscriptionDto): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(
      `${this.apiUrl}/auth/inscription`,
      inscriptionDto
    );
  }

  getUserRoles(): string[] {
    // Récupérer le token
    const token = localStorage.getItem('token');

    if (!token) {
      return [];
    }

    try {
      // Decoder le token
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      // Retourner les roles du token ou un tableau vide s'il n'y en a pas
      return tokenPayload.roles || [];
    } catch (error) {
      console.error('Erreur de décodage du token : ', error);
      return [];
    }
  }

  isAuthenticated() {
    // Retourne true ou false selon si le token existe
    return !!localStorage.getItem('token');
  }
}
