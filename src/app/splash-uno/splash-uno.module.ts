import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashUnoPageRoutingModule } from './splash-uno-routing.module';

import { SplashUnoPage } from './splash-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashUnoPageRoutingModule
  ],
  declarations: [SplashUnoPage]
})
export class SplashUnoPageModule {}
