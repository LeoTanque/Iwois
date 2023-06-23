import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Notificaciones2Page } from './notificaciones2.page';

const routes: Routes = [
  {
    path: '',
    component: Notificaciones2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Notificaciones2PageRoutingModule {}
