import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguroSaludPageRoutingModule } from './seguro-salud-routing.module';

import { SeguroSaludPage } from './seguro-salud.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguroSaludPageRoutingModule
  ],
  declarations: [SeguroSaludPage]
})
export class SeguroSaludPageModule {}
