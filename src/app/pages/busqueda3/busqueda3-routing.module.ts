import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Busqueda3Page } from './busqueda3.page';

const routes: Routes = [
  {
    path: '',
    component: Busqueda3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Busqueda3PageRoutingModule {}
