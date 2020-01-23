import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilAgentePage } from './perfil-agente.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilAgentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilAgentePageRoutingModule {}
