import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisTratamientos3Page } from './mis-tratamientos3.page';

const routes: Routes = [
  {
    path: '',
    component: MisTratamientos3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisTratamientos3PageRoutingModule {}
