import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarEditarEventoPage } from './agregar-editar-evento.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarEditarEventoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarEditarEventoPageRoutingModule {}
