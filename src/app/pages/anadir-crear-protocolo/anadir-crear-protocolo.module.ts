import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AnadirCrearProtocoloPageRoutingModule } from './anadir-crear-protocolo-routing.module';

import { AnadirCrearProtocoloPage } from './anadir-crear-protocolo.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AnadirCrearProtocoloPageRoutingModule,
    SharedModule
  ],
  declarations: [AnadirCrearProtocoloPage]
})
export class AnadirCrearProtocoloPageModule {}
