import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaludSolicitudesPage } from './salud-solicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: SaludSolicitudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaludSolicitudesPageRoutingModule {}
