import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMensajesPage } from './home-mensajes.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMensajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMensajesPageRoutingModule {}
