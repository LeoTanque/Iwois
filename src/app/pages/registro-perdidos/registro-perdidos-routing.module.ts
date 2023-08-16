import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroPerdidosPage } from './registro-perdidos.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroPerdidosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroPerdidosPageRoutingModule {}
