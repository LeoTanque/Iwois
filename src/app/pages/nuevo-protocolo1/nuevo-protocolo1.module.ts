import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProtocolo1PageRoutingModule } from './nuevo-protocolo1-routing.module';

import { NuevoProtocolo1Page } from './nuevo-protocolo1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProtocolo1PageRoutingModule,
    SharedModule
  ],
  declarations: [NuevoProtocolo1Page]
})
export class NuevoProtocolo1PageModule {}
