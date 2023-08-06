import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrearNuevoProtocoloPage } from './crear-nuevo-protocolo.page';

const routes: Routes = [
  {
    path: '',
    component: CrearNuevoProtocoloPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearNuevoProtocoloPageRoutingModule {}
