import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashUnoPage } from './splash-uno.page';

const routes: Routes = [
  {
    path: '',
    component: SplashUnoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashUnoPageRoutingModule {}
