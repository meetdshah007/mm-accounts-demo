import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  login() {
    localStorage.setItem('isLoggedIn', JSON.stringify(true));
  }

  isLoggedIn(): boolean {
    return JSON.parse(localStorage.getItem('isLoggedIn'));
  }

  logout() {
    localStorage.removeItem('isLoggedIn');
  }
}
