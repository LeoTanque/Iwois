import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProtocoloFinalEjercicioPageRoutingModule } from './nuevo-protocolo-final-ejercicio-routing.module';

import { NuevoProtocoloFinalEjercicioPage } from './nuevo-protocolo-final-ejercicio.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProtocoloFinalEjercicioPageRoutingModule,
    SharedModule
  ],
  declarations: [NuevoProtocoloFinalEjercicioPage]
})
export class NuevoProtocoloFinalEjercicioPageModule {}
