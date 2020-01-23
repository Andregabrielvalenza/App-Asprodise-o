import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InversionesFormularioPage } from './inversiones-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: InversionesFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InversionesFormularioPageRoutingModule {}
