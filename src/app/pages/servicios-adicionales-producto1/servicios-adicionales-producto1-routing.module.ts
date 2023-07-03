import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosAdicionalesProducto1Page } from './servicios-adicionales-producto1.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosAdicionalesProducto1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosAdicionalesProducto1PageRoutingModule {}
