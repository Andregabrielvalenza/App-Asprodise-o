import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VentajaDosPage } from './ventaja-dos.page';

const routes: Routes = [
  {
    path: '',
    component: VentajaDosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VentajaDosPageRoutingModule {}
