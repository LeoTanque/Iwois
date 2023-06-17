import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AvisoEjercicioPage } from './aviso-ejercicio.page';

const routes: Routes = [
  {
    path: '',
    component: AvisoEjercicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AvisoEjercicioPageRoutingModule {}
