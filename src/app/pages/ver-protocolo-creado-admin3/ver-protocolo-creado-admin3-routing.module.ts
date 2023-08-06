import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerProtocoloCreadoAdmin3Page } from './ver-protocolo-creado-admin3.page';

const routes: Routes = [
  {
    path: '',
    component: VerProtocoloCreadoAdmin3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerProtocoloCreadoAdmin3PageRoutingModule {}
