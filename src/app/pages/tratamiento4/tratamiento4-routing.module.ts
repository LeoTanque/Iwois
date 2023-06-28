import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tratamiento4Page } from './tratamiento4.page';

const routes: Routes = [
  {
    path: '',
    component: Tratamiento4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tratamiento4PageRoutingModule {}
