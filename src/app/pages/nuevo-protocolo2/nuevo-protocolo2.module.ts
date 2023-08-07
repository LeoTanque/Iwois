import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProtocolo2PageRoutingModule } from './nuevo-protocolo2-routing.module';

import { NuevoProtocolo2Page } from './nuevo-protocolo2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProtocolo2PageRoutingModule,
    SharedModule
  ],
  declarations: [NuevoProtocolo2Page]
})
export class NuevoProtocolo2PageModule {}
