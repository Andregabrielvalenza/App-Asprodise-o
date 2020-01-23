import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeguroVidaPage } from './seguro-vida.page';

const routes: Routes = [
  {
    path: '',
    component: SeguroVidaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeguroVidaPageRoutingModule {}
