import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelIdiomaPage } from './sel-idioma.page';

const routes: Routes = [
  {
    path: '',
    component: SelIdiomaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelIdiomaPageRoutingModule {}
