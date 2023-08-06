import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerProtocoloCreadoAdminPage } from './ver-protocolo-creado-admin.page';

const routes: Routes = [
  {
    path: '',
    component: VerProtocoloCreadoAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerProtocoloCreadoAdminPageRoutingModule {}
