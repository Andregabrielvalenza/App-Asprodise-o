import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidaFormularioPageRoutingModule } from './vida-formulario-routing.module';

import { VidaFormularioPage } from './vida-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidaFormularioPageRoutingModule
  ],
  declarations: [VidaFormularioPage]
})
export class VidaFormularioPageModule {}
