import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AsignarProtocoloPaciente1PageRoutingModule } from './asignar-protocolo-paciente1-routing.module';

import { AsignarProtocoloPaciente1Page } from './asignar-protocolo-paciente1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AsignarProtocoloPaciente1PageRoutingModule,
    SharedModule
  ],
  declarations: [AsignarProtocoloPaciente1Page]
})
export class AsignarProtocoloPaciente1PageModule {}
