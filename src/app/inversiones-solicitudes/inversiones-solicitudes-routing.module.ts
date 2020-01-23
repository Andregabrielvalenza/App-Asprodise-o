import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InversionesSolicitudesPage } from './inversiones-solicitudes.page';

const routes: Routes = [
  {
    path: '',
    component: InversionesSolicitudesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InversionesSolicitudesPageRoutingModule {}
