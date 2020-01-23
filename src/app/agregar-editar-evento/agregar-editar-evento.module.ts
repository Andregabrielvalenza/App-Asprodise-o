import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarEditarEventoPageRoutingModule } from './agregar-editar-evento-routing.module';

import { AgregarEditarEventoPage } from './agregar-editar-evento.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarEditarEventoPageRoutingModule
  ],
  declarations: [AgregarEditarEventoPage]
})
export class AgregarEditarEventoPageModule {}
