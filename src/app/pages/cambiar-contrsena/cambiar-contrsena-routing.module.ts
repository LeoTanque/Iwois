import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambiarContrsenaPage } from './cambiar-contrsena.page';

const routes: Routes = [
  {
    path: '',
    component: CambiarContrsenaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambiarContrsenaPageRoutingModule {}
