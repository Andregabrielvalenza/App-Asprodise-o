import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeguroVidaPageRoutingModule } from './seguro-vida-routing.module';

import { SeguroVidaPage } from './seguro-vida.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeguroVidaPageRoutingModule
  ],
  declarations: [SeguroVidaPage]
})
export class SeguroVidaPageModule {}
