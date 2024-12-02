import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthResponseDto } from '../model/auth-response-dto';
import { LoginDto } from '../model/login-dto';
import { InscriptionDto } from '../model/inscription-dto';
import { Utilisateur } from '../model/utilisateur';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly apiUrl = 'http://localhost:8080';
  readonly http = inject(HttpClient);

  constructor() {}

  // Méthode pour se login
  login(loginDto: LoginDto): Observable<AuthResponseDto> {
    return this.http.post<AuthResponseDto>(
      `${this.apiUrl}/auth/login`,
      loginDto
    );
  }

  // Méthode pour enregistrer un utilisateur
  register(inscriptionDto: InscriptionDto): Observable<Utilisateur> {
    return this.http.post<Utilisateur>(
      `${this.apiUrl}/auth/inscription`,
      inscriptionDto
    );
  }
}
