import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentaMetaPage } from './venta-meta.page';

const routes: Routes = [
  {
    path: '',
    component: VentaMetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentaMetaPageRoutingModule {}
