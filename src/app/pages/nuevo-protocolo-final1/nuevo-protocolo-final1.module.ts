import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProtocoloFinal1PageRoutingModule } from './nuevo-protocolo-final1-routing.module';

import { NuevoProtocoloFinal1Page } from './nuevo-protocolo-final1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProtocoloFinal1PageRoutingModule,
    SharedModule
  ],
  declarations: [NuevoProtocoloFinal1Page]
})
export class NuevoProtocoloFinal1PageModule {}
