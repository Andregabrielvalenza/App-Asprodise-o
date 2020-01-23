import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidaSolicitudesPageRoutingModule } from './vida-solicitudes-routing.module';

import { VidaSolicitudesPage } from './vida-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidaSolicitudesPageRoutingModule
  ],
  declarations: [VidaSolicitudesPage]
})
export class VidaSolicitudesPageModule {}
