import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfil1Page } from './editar-perfil1.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfil1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfil1PageRoutingModule {}
