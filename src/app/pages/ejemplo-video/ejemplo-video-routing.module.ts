import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EjemploVideoPage } from './ejemplo-video.page';

const routes: Routes = [
  {
    path: '',
    component: EjemploVideoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EjemploVideoPageRoutingModule {}
