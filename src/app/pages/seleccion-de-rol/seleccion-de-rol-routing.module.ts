import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionDeRolPage } from './seleccion-de-rol.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionDeRolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionDeRolPageRoutingModule {}
