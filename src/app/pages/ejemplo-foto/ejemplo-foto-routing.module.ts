import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemploFotoPage } from './ejemplo-foto.page';

const routes: Routes = [
  {
    path: '',
    component: EjemploFotoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploFotoPageRoutingModule {}
