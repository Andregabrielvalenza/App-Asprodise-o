import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguroSaludPage } from './seguro-salud.page';

const routes: Routes = [
  {
    path: '',
    component: SeguroSaludPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguroSaludPageRoutingModule {}
