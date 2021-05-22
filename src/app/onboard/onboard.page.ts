import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-onboard',
  templateUrl: 'onboard.page.html',
  styleUrls: ['onboard.page.scss'],
})
export class OnboardPage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    slidesPerView: 1,
    autoplay: true,
  };

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
    localStorage.setItem('onboarded', JSON.stringify(true));
  }

  getStarted() {
    this.navCtrl.navigateRoot('/login');
  }
}
