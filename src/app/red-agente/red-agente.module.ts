import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedAgentePageRoutingModule } from './red-agente-routing.module';

import { RedAgentePage } from './red-agente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedAgentePageRoutingModule
  ],
  declarations: [RedAgentePage]
})
export class RedAgentePageModule {}
