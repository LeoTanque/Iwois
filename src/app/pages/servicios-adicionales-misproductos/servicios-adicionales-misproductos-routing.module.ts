import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ServiciosAdicionalesMisproductosPage } from './servicios-adicionales-misproductos.page';

const routes: Routes = [
  {
    path: '',
    component: ServiciosAdicionalesMisproductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiciosAdicionalesMisproductosPageRoutingModule {}
