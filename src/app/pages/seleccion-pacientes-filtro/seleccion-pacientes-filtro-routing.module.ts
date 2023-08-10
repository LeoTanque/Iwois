import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionPacientesFiltroPage } from './seleccion-pacientes-filtro.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionPacientesFiltroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionPacientesFiltroPageRoutingModule {}
