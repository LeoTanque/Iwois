import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilMedicoPage } from './perfil-medico.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilMedicoPageRoutingModule {}
