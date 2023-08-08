import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProtocoloFinal2PageRoutingModule } from './nuevo-protocolo-final2-routing.module';

import { NuevoProtocoloFinal2Page } from './nuevo-protocolo-final2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProtocoloFinal2PageRoutingModule,
    SharedModule
  ],
  declarations: [NuevoProtocoloFinal2Page]
})
export class NuevoProtocoloFinal2PageModule {}
