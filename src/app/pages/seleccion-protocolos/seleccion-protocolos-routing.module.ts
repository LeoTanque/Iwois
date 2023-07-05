import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionProtocolosPage } from './seleccion-protocolos.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionProtocolosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionProtocolosPageRoutingModule {}
