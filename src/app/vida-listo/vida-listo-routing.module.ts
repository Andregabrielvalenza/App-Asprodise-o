import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VidaListoPage } from './vida-listo.page';

const routes: Routes = [
  {
    path: '',
    component: VidaListoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VidaListoPageRoutingModule {}
