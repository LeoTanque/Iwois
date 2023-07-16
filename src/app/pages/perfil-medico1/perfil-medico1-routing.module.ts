import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilMedico1Page } from './perfil-medico1.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilMedico1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilMedico1PageRoutingModule {}
