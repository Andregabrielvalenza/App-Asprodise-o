import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentajaUnoPageRoutingModule } from './ventaja-uno-routing.module';

import { VentajaUnoPage } from './ventaja-uno.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentajaUnoPageRoutingModule
  ],
  declarations: [VentajaUnoPage]
})
export class VentajaUnoPageModule {}
