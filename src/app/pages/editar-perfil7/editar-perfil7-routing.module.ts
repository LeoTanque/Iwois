import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfil7Page } from './editar-perfil7.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfil7Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfil7PageRoutingModule {}
