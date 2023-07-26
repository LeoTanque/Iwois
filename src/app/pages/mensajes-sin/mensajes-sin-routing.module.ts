import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MensajesSinPage } from './mensajes-sin.page';

const routes: Routes = [
  {
    path: '',
    component: MensajesSinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MensajesSinPageRoutingModule {}
