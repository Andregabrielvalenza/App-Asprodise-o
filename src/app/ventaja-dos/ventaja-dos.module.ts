import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VentajaDosPageRoutingModule } from './ventaja-dos-routing.module';

import { VentajaDosPage } from './ventaja-dos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VentajaDosPageRoutingModule
  ],
  declarations: [VentajaDosPage]
})
export class VentajaDosPageModule {}
