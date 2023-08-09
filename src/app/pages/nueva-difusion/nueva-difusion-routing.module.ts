import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevaDifusionPage } from './nueva-difusion.page';

const routes: Routes = [
  {
    path: '',
    component: NuevaDifusionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevaDifusionPageRoutingModule {}
