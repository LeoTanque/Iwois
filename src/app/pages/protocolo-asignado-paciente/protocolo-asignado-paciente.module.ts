import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocoloAsignadoPacientePageRoutingModule } from './protocolo-asignado-paciente-routing.module';

import { ProtocoloAsignadoPacientePage } from './protocolo-asignado-paciente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtocoloAsignadoPacientePageRoutingModule
  ],
  declarations: [ProtocoloAsignadoPacientePage]
})
export class ProtocoloAsignadoPacientePageModule {}
