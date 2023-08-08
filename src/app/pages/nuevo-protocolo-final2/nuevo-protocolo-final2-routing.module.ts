import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProtocoloFinal2Page } from './nuevo-protocolo-final2.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProtocoloFinal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProtocoloFinal2PageRoutingModule {}
