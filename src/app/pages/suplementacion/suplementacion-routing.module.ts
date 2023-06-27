import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuplementacionPage } from './suplementacion.page';

const routes: Routes = [
  {
    path: '',
    component: SuplementacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuplementacionPageRoutingModule {}
