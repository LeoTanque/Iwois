import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TratamientoEjercicioPage } from './tratamiento-ejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: TratamientoEjercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TratamientoEjercicioPageRoutingModule {}
