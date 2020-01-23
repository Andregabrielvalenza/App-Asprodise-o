import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentasVentasPage } from './ventas-ventas.page';

const routes: Routes = [
  {
    path: '',
    component: VentasVentasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentasVentasPageRoutingModule {}
