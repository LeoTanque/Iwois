import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocoloAsignadoPaciente2PageRoutingModule } from './protocolo-asignado-paciente2-routing.module';

import { ProtocoloAsignadoPaciente2Page } from './protocolo-asignado-paciente2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtocoloAsignadoPaciente2PageRoutingModule,
    SharedModule
  ],
  declarations: [ProtocoloAsignadoPaciente2Page]
})
export class ProtocoloAsignadoPaciente2PageModule {}
