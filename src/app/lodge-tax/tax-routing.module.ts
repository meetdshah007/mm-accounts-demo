import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaxPage } from './tax.page';

const routes: Routes = [
  {
    path: '',
    component: TaxPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaxPageRoutingModule {}
