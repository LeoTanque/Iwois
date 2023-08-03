import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirCrearProtocoloPageRoutingModule } from './anadir-crear-protocolo-routing.module';

import { AnadirCrearProtocoloPage } from './anadir-crear-protocolo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirCrearProtocoloPageRoutingModule
  ],
  declarations: [AnadirCrearProtocoloPage]
})
export class AnadirCrearProtocoloPageModule {}
