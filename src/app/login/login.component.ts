import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private navCtrl: NavController,
    private auth: AuthService
  ) {}

  navigate() {
    this.router.navigate(['/register']);
  }

  login() {
    this.auth.login();
    this.navCtrl.navigateRoot('tabs');
  }

  goToRegister() {
    this.navCtrl.navigateForward('register');
  }

  ngOnInit() {}
}
