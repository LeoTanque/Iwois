import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProtocoloSuplementacionPageRoutingModule } from './nuevo-protocolo-suplementacion-routing.module';

import { NuevoProtocoloSuplementacionPage } from './nuevo-protocolo-suplementacion.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProtocoloSuplementacionPageRoutingModule,
    SharedModule
  ],
  declarations: [NuevoProtocoloSuplementacionPage]
})
export class NuevoProtocoloSuplementacionPageModule {}
