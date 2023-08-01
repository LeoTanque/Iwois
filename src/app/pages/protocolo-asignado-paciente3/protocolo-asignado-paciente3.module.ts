import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocoloAsignadoPaciente3PageRoutingModule } from './protocolo-asignado-paciente3-routing.module';

import { ProtocoloAsignadoPaciente3Page } from './protocolo-asignado-paciente3.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtocoloAsignadoPaciente3PageRoutingModule,
    SharedModule
  ],
  declarations: [ProtocoloAsignadoPaciente3Page]
})
export class ProtocoloAsignadoPaciente3PageModule {}
