import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPacientesSinPage } from './lista-pacientes-sin.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPacientesSinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPacientesSinPageRoutingModule {}
