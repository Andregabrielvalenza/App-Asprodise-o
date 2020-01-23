import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InversionesFormularioPageRoutingModule } from './inversiones-formulario-routing.module';

import { InversionesFormularioPage } from './inversiones-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InversionesFormularioPageRoutingModule
  ],
  declarations: [InversionesFormularioPage]
})
export class InversionesFormularioPageModule {}
