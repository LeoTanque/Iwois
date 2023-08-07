import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProtocoloPageRoutingModule } from './nuevo-protocolo-routing.module';

import { NuevoProtocoloPage } from './nuevo-protocolo.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProtocoloPageRoutingModule,
    SharedModule
  ],
  declarations: [NuevoProtocoloPage]
})
export class NuevoProtocoloPageModule {}
