import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltrarPacientes2Page } from './filtrar-pacientes2.page';

const routes: Routes = [
  {
    path: '',
    component: FiltrarPacientes2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltrarPacientes2PageRoutingModule {}
