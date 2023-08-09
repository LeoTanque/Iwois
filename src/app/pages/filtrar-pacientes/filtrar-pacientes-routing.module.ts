import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltrarPacientesPage } from './filtrar-pacientes.page';

const routes: Routes = [
  {
    path: '',
    component: FiltrarPacientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltrarPacientesPageRoutingModule {}
