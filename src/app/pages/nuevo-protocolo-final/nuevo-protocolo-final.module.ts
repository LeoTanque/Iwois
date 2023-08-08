import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProtocoloFinalPageRoutingModule } from './nuevo-protocolo-final-routing.module';

import { NuevoProtocoloFinalPage } from './nuevo-protocolo-final.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProtocoloFinalPageRoutingModule,
    SharedModule
  ],
  declarations: [NuevoProtocoloFinalPage]
})
export class NuevoProtocoloFinalPageModule {}
