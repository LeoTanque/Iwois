import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfil6Page } from './editar-perfil6.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfil6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfil6PageRoutingModule {}
