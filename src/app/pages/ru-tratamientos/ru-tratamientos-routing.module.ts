import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RuTratamientosPage } from './ru-tratamientos.page';

const routes: Routes = [
  {
    path: '',
    component: RuTratamientosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RuTratamientosPageRoutingModule {}
