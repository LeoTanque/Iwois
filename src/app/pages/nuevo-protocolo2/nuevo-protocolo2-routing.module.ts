import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProtocolo2Page } from './nuevo-protocolo2.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProtocolo2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProtocolo2PageRoutingModule {}
