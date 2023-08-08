import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProtocoloFinal1Page } from './nuevo-protocolo-final1.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProtocoloFinal1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProtocoloFinal1PageRoutingModule {}
