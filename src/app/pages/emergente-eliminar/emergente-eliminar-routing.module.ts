import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmergenteEliminarPage } from './emergente-eliminar.page';

const routes: Routes = [
  {
    path: '',
    component: EmergenteEliminarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmergenteEliminarPageRoutingModule {}
