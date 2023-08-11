import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfil4Page } from './editar-perfil4.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfil4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfil4PageRoutingModule {}
