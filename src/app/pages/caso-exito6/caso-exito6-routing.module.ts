import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasoExito6Page } from './caso-exito6.page';

const routes: Routes = [
  {
    path: '',
    component: CasoExito6Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasoExito6PageRoutingModule {}
