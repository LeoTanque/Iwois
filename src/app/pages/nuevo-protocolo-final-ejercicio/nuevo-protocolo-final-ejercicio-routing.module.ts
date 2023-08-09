import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProtocoloFinalEjercicioPage } from './nuevo-protocolo-final-ejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProtocoloFinalEjercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProtocoloFinalEjercicioPageRoutingModule {}
