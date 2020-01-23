import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidaFormularioPage } from './vida-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: VidaFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidaFormularioPageRoutingModule {}
