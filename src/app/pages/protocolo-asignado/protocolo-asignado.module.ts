import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocoloAsignadoPageRoutingModule } from './protocolo-asignado-routing.module';

import { ProtocoloAsignadoPage } from './protocolo-asignado.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtocoloAsignadoPageRoutingModule,
    SharedModule
  ],
  declarations: [ProtocoloAsignadoPage]
})
export class ProtocoloAsignadoPageModule {}
