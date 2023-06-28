import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Tratamiento5Page } from './tratamiento5.page';

const routes: Routes = [
  {
    path: '',
    component: Tratamiento5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Tratamiento5PageRoutingModule {}
