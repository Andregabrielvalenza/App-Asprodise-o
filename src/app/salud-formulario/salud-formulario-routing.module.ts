import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SaludFormularioPage } from './salud-formulario.page';

const routes: Routes = [
  {
    path: '',
    component: SaludFormularioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SaludFormularioPageRoutingModule {}
