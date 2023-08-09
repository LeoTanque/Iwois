import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AsignarProtocoloPaciente1Page } from './asignar-protocolo-paciente1.page';

const routes: Routes = [
  {
    path: '',
    component: AsignarProtocoloPaciente1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AsignarProtocoloPaciente1PageRoutingModule {}
