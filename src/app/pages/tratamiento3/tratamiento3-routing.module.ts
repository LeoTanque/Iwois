import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tratamiento3Page } from './tratamiento3.page';

const routes: Routes = [
  {
    path: '',
    component: Tratamiento3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tratamiento3PageRoutingModule {}
