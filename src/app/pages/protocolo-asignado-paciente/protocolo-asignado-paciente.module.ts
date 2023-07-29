import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocoloAsignadoPacientePageRoutingModule } from './protocolo-asignado-paciente-routing.module';

import { ProtocoloAsignadoPacientePage } from './protocolo-asignado-paciente.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtocoloAsignadoPacientePageRoutingModule,
    SharedModule
  ],
  declarations: [ProtocoloAsignadoPacientePage]
})
export class ProtocoloAsignadoPacientePageModule {}
