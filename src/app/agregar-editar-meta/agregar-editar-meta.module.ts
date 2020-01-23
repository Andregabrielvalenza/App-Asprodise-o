import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AgregarEditarMetaPageRoutingModule } from './agregar-editar-meta-routing.module';

import { AgregarEditarMetaPage } from './agregar-editar-meta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AgregarEditarMetaPageRoutingModule
  ],
  declarations: [AgregarEditarMetaPage]
})
export class AgregarEditarMetaPageModule {}
