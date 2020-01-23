import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentaMetaPageRoutingModule } from './venta-meta-routing.module';

import { VentaMetaPage } from './venta-meta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentaMetaPageRoutingModule
  ],
  declarations: [VentaMetaPage]
})
export class VentaMetaPageModule {}
