import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaProtocolosConPage } from './lista-protocolos-con.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProtocolosConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaProtocolosConPageRoutingModule {}
