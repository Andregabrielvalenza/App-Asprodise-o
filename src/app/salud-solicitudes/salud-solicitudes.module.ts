import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludSolicitudesPageRoutingModule } from './salud-solicitudes-routing.module';

import { SaludSolicitudesPage } from './salud-solicitudes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludSolicitudesPageRoutingModule
  ],
  declarations: [SaludSolicitudesPage]
})
export class SaludSolicitudesPageModule {}
