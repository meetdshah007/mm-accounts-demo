import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private navCtrl: NavController, private auth: AuthService) {}

  ngOnInit() {}

  back() {
    this.navCtrl.back();
  }

  register() {
    this.auth.login();
    this.navCtrl.navigateRoot('tabs');
  }
}
