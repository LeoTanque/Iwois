import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotificacionesProfesionalesPage } from './notificaciones-profesionales.page';

const routes: Routes = [
  {
    path: '',
    component: NotificacionesProfesionalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotificacionesProfesionalesPageRoutingModule {}
