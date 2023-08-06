import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerProtocoloCreadoAdmin2Page } from './ver-protocolo-creado-admin2.page';

const routes: Routes = [
  {
    path: '',
    component: VerProtocoloCreadoAdmin2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerProtocoloCreadoAdmin2PageRoutingModule {}
