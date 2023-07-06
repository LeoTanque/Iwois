import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocoloAsignadoPacientePage } from './protocolo-asignado-paciente.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocoloAsignadoPacientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocoloAsignadoPacientePageRoutingModule {}
