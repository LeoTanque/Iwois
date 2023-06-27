import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuTratamientosProgresoPage } from './ru-tratamientos-progreso.page';

const routes: Routes = [
  {
    path: '',
    component: RuTratamientosProgresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuTratamientosProgresoPageRoutingModule {}
