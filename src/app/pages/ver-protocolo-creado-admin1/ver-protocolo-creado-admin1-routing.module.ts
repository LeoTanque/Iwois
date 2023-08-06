import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerProtocoloCreadoAdmin1Page } from './ver-protocolo-creado-admin1.page';

const routes: Routes = [
  {
    path: '',
    component: VerProtocoloCreadoAdmin1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerProtocoloCreadoAdmin1PageRoutingModule {}
