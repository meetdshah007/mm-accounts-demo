import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TaxPage } from './tax.page';

import { TaxPageRoutingModule } from './tax-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TaxPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [TaxPage],
})
export class TaxPageModule {}
