import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RedAgentePage } from './red-agente.page';

const routes: Routes = [
  {
    path: '',
    component: RedAgentePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RedAgentePageRoutingModule {}
