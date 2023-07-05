import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaPacientes2Page } from './busqueda-pacientes2.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaPacientes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaPacientes2PageRoutingModule {}
