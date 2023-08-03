import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QueSehaSeleccionadoPage } from './que-seha-seleccionado.page';

const routes: Routes = [
  {
    path: '',
    component: QueSehaSeleccionadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QueSehaSeleccionadoPageRoutingModule {}
