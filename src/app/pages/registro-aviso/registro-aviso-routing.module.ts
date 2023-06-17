import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAvisoPage } from './registro-aviso.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAvisoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAvisoPageRoutingModule {}
