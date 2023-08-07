import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProtocoloSuplementacionPage } from './nuevo-protocolo-suplementacion.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProtocoloSuplementacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProtocoloSuplementacionPageRoutingModule {}
