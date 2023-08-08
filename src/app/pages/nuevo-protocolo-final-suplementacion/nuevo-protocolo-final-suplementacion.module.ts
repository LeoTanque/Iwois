import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProtocoloFinalSuplementacionPageRoutingModule } from './nuevo-protocolo-final-suplementacion-routing.module';

import { NuevoProtocoloFinalSuplementacionPage } from './nuevo-protocolo-final-suplementacion.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProtocoloFinalSuplementacionPageRoutingModule,
    SharedModule
  ],
  declarations: [NuevoProtocoloFinalSuplementacionPage]
})
export class NuevoProtocoloFinalSuplementacionPageModule {}
