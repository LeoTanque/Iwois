import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarContrasenaPage } from './editar-contrasena.page';

const routes: Routes = [
  {
    path: '',
    component: EditarContrasenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarContrasenaPageRoutingModule {}
