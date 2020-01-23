import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentasComisionesPage } from './ventas-comisiones.page';

const routes: Routes = [
  {
    path: '',
    component: VentasComisionesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasComisionesPageRoutingModule {}
