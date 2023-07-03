import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BusquedaArrPage } from './busqueda-arr.page';

const routes: Routes = [
  {
    path: '',
    component: BusquedaArrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BusquedaArrPageRoutingModule {}
