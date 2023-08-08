import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProtocoloFinalSuplementacionPage } from './nuevo-protocolo-final-suplementacion.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProtocoloFinalSuplementacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProtocoloFinalSuplementacionPageRoutingModule {}
