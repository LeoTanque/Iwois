import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPerfil5Page } from './editar-perfil5.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPerfil5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPerfil5PageRoutingModule {}
