import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VidaListoPageRoutingModule } from './vida-listo-routing.module';

import { VidaListoPage } from './vida-listo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VidaListoPageRoutingModule
  ],
  declarations: [VidaListoPage]
})
export class VidaListoPageModule {}
