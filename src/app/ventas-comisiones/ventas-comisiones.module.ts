import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentasComisionesPageRoutingModule } from './ventas-comisiones-routing.module';

import { VentasComisionesPage } from './ventas-comisiones.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasComisionesPageRoutingModule
  ],
  declarations: [VentasComisionesPage]
})
export class VentasComisionesPageModule {}
