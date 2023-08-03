import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeleccionPrePostProtocoloPage } from './seleccion-pre-post-protocolo.page';

const routes: Routes = [
  {
    path: '',
    component: SeleccionPrePostProtocoloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeleccionPrePostProtocoloPageRoutingModule {}
