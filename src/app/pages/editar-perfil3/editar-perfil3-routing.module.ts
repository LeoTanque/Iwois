import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfil3Page } from './editar-perfil3.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfil3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfil3PageRoutingModule {}
