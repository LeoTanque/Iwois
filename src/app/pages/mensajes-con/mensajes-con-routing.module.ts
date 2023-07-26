import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesConPage } from './mensajes-con.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesConPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesConPageRoutingModule {}
