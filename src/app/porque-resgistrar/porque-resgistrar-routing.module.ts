import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorqueResgistrarPage } from './porque-resgistrar.page';

const routes: Routes = [
  {
    path: '',
    component: PorqueResgistrarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorqueResgistrarPageRoutingModule {}
