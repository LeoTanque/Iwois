import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearNuevoProtocoloPageRoutingModule } from './crear-nuevo-protocolo-routing.module';

import { CrearNuevoProtocoloPage } from './crear-nuevo-protocolo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearNuevoProtocoloPageRoutingModule
  ],
  declarations: [CrearNuevoProtocoloPage]
})
export class CrearNuevoProtocoloPageModule {}
