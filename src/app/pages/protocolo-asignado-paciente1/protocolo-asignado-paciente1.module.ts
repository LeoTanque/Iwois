import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProtocoloAsignadoPaciente1PageRoutingModule } from './protocolo-asignado-paciente1-routing.module';

import { ProtocoloAsignadoPaciente1Page } from './protocolo-asignado-paciente1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProtocoloAsignadoPaciente1PageRoutingModule,
    SharedModule
  ],
  declarations: [ProtocoloAsignadoPaciente1Page]
})
export class ProtocoloAsignadoPaciente1PageModule {}
