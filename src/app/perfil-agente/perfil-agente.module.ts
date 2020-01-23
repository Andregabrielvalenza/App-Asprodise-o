import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilAgentePageRoutingModule } from './perfil-agente-routing.module';

import { PerfilAgentePage } from './perfil-agente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilAgentePageRoutingModule
  ],
  declarations: [PerfilAgentePage]
})
export class PerfilAgentePageModule {}
