import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoProtocolo1Page } from './nuevo-protocolo1.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoProtocolo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoProtocolo1PageRoutingModule {}
