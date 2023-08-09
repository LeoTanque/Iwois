import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarProtocoloPaciente2Page } from './asignar-protocolo-paciente2.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarProtocoloPaciente2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarProtocoloPaciente2PageRoutingModule {}
