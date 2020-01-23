import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SaludFormularioPageRoutingModule } from './salud-formulario-routing.module';

import { SaludFormularioPage } from './salud-formulario.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SaludFormularioPageRoutingModule
  ],
  declarations: [SaludFormularioPage]
})
export class SaludFormularioPageModule {}
