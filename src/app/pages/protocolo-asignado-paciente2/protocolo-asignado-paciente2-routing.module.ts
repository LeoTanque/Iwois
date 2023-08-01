import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocoloAsignadoPaciente2Page } from './protocolo-asignado-paciente2.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocoloAsignadoPaciente2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocoloAsignadoPaciente2PageRoutingModule {}
