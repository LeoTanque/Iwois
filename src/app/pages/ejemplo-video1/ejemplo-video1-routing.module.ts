import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemploVideo1Page } from './ejemplo-video1.page';

const routes: Routes = [
  {
    path: '',
    component: EjemploVideo1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploVideo1PageRoutingModule {}
