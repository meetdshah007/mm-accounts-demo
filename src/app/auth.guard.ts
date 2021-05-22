import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}
  canActivate(): boolean {
    const isLoggedIn = this.auth.isLoggedIn();
    if (isLoggedIn) {
      this.router.navigateByUrl('/tabs');
      return false;
    }
    return true;
  }
}
