import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasoExito3Page } from './caso-exito3.page';

const routes: Routes = [
  {
    path: '',
    component: CasoExito3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasoExito3PageRoutingModule {}
