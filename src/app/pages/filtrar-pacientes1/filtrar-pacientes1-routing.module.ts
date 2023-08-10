import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FiltrarPacientes1Page } from './filtrar-pacientes1.page';

const routes: Routes = [
  {
    path: '',
    component: FiltrarPacientes1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FiltrarPacientes1PageRoutingModule {}
