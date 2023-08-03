import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListaProtocolosSinPage } from './lista-protocolos-sin.page';

const routes: Routes = [
  {
    path: '',
    component: ListaProtocolosSinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListaProtocolosSinPageRoutingModule {}
