import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProtocoloAsignadoPage } from './protocolo-asignado.page';

const routes: Routes = [
  {
    path: '',
    component: ProtocoloAsignadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProtocoloAsignadoPageRoutingModule {}
