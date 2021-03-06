import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OnboardPage } from './onboard.page';

import { OnboardPageRoutingModule } from './onboard-routing.module';

@NgModule({
  imports: [IonicModule, CommonModule, FormsModule, OnboardPageRoutingModule],
  declarations: [OnboardPage],
})
export class OnboardPageModule {}
