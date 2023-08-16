import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InfoSolicitudProductoPage } from './info-solicitud-producto.page';

const routes: Routes = [
  {
    path: '',
    component: InfoSolicitudProductoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InfoSolicitudProductoPageRoutingModule {}
