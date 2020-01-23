import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InversionesSolicitudesPageRoutingModule } from './inversiones-solicitudes-routing.module';

import { InversionesSolicitudesPage } from './inversiones-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InversionesSolicitudesPageRoutingModule
  ],
  declarations: [InversionesSolicitudesPage]
})
export class InversionesSolicitudesPageModule {}
