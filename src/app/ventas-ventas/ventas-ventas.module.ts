import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentasVentasPageRoutingModule } from './ventas-ventas-routing.module';

import { VentasVentasPage } from './ventas-ventas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentasVentasPageRoutingModule
  ],
  declarations: [VentasVentasPage]
})
export class VentasVentasPageModule {}
