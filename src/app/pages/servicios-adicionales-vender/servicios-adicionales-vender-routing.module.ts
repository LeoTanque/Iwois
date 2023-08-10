import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosAdicionalesVenderPage } from './servicios-adicionales-vender.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosAdicionalesVenderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosAdicionalesVenderPageRoutingModule {}
