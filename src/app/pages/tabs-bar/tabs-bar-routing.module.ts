import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsBarPage } from './tabs-bar.page';

const routes: Routes = [
  {
    path: '',
    component: TabsBarPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsBarPageRoutingModule {}
