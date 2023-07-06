import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tratamiento35Page } from './tratamiento3.5.page';

const routes: Routes = [
  {
    path: '',
    component: Tratamiento35Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tratamiento35PageRoutingModule {}
