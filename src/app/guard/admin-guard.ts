import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.getUserRoles().includes('ADMIN')) {
      return true;
    } else {
      this.router.navigate(['home']);
      return false;
    }
  }
}
