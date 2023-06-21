import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisTratamientosPage } from './mis-tratamientos.page';

const routes: Routes = [
  {
    path: '',
    component: MisTratamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisTratamientosPageRoutingModule {}
