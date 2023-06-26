import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Busqueda2Page } from './busqueda2.page';

const routes: Routes = [
  {
    path: '',
    component: Busqueda2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Busqueda2PageRoutingModule {}
