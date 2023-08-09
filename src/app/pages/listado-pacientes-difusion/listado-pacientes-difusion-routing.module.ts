import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListadoPacientesDifusionPage } from './listado-pacientes-difusion.page';

const routes: Routes = [
  {
    path: '',
    component: ListadoPacientesDifusionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListadoPacientesDifusionPageRoutingModule {}
