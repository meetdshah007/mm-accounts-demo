import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private navCtrl: NavController) {}

  navigate() {
    this.router.navigate(['/register']);
  }

  login() {
    this.navCtrl.navigateRoot('tabs');
  }

  goToRegister() {
    this.navCtrl.navigateForward('register');
  }

  ngOnInit() {}
}
