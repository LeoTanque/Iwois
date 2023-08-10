import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionPacientesFiltroDifusion1Page } from './seleccion-pacientes-filtro-difusion1.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionPacientesFiltroDifusion1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionPacientesFiltroDifusion1PageRoutingModule {}
