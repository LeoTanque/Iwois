import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProtocoloEjercicioPage } from './nuevo-protocolo-ejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProtocoloEjercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProtocoloEjercicioPageRoutingModule {}
