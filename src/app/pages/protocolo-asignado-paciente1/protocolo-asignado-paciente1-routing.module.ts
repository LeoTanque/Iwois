import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocoloAsignadoPaciente1Page } from './protocolo-asignado-paciente1.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocoloAsignadoPaciente1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocoloAsignadoPaciente1PageRoutingModule {}
