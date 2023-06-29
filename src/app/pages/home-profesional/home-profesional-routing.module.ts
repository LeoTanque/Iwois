import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeProfesionalPage } from './home-profesional.page';

const routes: Routes = [
  {
    path: '',
    component: HomeProfesionalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeProfesionalPageRoutingModule {}
