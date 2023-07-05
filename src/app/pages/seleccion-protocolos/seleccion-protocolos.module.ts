import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionProtocolosPageRoutingModule } from './seleccion-protocolos-routing.module';

import { SeleccionProtocolosPage } from './seleccion-protocolos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionProtocolosPageRoutingModule
  ],
  declarations: [SeleccionProtocolosPage]
})
export class SeleccionProtocolosPageModule {}
