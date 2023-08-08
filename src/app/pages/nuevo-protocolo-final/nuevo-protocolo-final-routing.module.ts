import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProtocoloFinalPage } from './nuevo-protocolo-final.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProtocoloFinalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProtocoloFinalPageRoutingModule {}
