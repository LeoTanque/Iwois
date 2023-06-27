import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TratamientoSuplementacionPage } from './tratamiento-suplementacion.page';

const routes: Routes = [
  {
    path: '',
    component: TratamientoSuplementacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TratamientoSuplementacionPageRoutingModule {}
