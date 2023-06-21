import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tratamientos2Page } from './tratamientos2.page';

const routes: Routes = [
  {
    path: '',
    component: Tratamientos2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tratamientos2PageRoutingModule {}
