import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarProtocoloPaciente2PageRoutingModule } from './asignar-protocolo-paciente2-routing.module';

import { AsignarProtocoloPaciente2Page } from './asignar-protocolo-paciente2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarProtocoloPaciente2PageRoutingModule,
    SharedModule
  ],
  declarations: [AsignarProtocoloPaciente2Page]
})
export class AsignarProtocoloPaciente2PageModule {}
