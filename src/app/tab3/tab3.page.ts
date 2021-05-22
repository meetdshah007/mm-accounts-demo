import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  date = new Date();

  constructor(private navCtrl: NavController, private auth: AuthService) {}

  onLogout() {
    this.auth.logout();
    this.navCtrl.navigateRoot('');
  }
}
