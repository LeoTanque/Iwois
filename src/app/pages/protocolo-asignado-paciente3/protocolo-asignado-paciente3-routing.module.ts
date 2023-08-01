import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocoloAsignadoPaciente3Page } from './protocolo-asignado-paciente3.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocoloAsignadoPaciente3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocoloAsignadoPaciente3PageRoutingModule {}
