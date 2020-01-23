import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AgregarEditarMetaPage } from './agregar-editar-meta.page';

const routes: Routes = [
  {
    path: '',
    component: AgregarEditarMetaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AgregarEditarMetaPageRoutingModule {}
