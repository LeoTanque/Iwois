import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasoExito4Page } from './caso-exito4.page';

const routes: Routes = [
  {
    path: '',
    component: CasoExito4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasoExito4PageRoutingModule {}
