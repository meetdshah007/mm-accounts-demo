import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class OnboardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate() {
    const isPresented = JSON.parse(localStorage.getItem('onboarded'));
    if (isPresented) {
      this.router.navigateByUrl('/login');
      return false;
    }
    return true;
  }
}
