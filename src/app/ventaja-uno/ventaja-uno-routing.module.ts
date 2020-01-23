import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentajaUnoPage } from './ventaja-uno.page';

const routes: Routes = [
  {
    path: '',
    component: VentajaUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentajaUnoPageRoutingModule {}
