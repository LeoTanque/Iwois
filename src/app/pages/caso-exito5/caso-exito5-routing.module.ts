import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasoExito5Page } from './caso-exito5.page';

const routes: Routes = [
  {
    path: '',
    component: CasoExito5Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasoExito5PageRoutingModule {}
