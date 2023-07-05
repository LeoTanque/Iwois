import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaPacientesConPage } from './lista-pacientes-con.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPacientesConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaPacientesConPageRoutingModule {}
