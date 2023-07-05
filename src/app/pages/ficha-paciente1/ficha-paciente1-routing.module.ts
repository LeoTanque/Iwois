import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FichaPaciente1Page } from './ficha-paciente1.page';

const routes: Routes = [
  {
    path: '',
    component: FichaPaciente1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FichaPaciente1PageRoutingModule {}
