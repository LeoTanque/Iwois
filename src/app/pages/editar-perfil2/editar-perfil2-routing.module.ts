import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfil2Page } from './editar-perfil2.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfil2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfil2PageRoutingModule {}
