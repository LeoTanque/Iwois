import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevoProtocoloEjercicioPageRoutingModule } from './nuevo-protocolo-ejercicio-routing.module';

import { NuevoProtocoloEjercicioPage } from './nuevo-protocolo-ejercicio.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevoProtocoloEjercicioPageRoutingModule,
    SharedModule
  ],
  declarations: [NuevoProtocoloEjercicioPage]
})
export class NuevoProtocoloEjercicioPageModule {}
