import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AnadirCrearProtocoloPage } from './anadir-crear-protocolo.page';

const routes: Routes = [
  {
    path: '',
    component: AnadirCrearProtocoloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AnadirCrearProtocoloPageRoutingModule {}
