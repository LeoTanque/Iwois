import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerTodoProgresoPage } from './ver-todo-progreso.page';

const routes: Routes = [
  {
    path: '',
    component: VerTodoProgresoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerTodoProgresoPageRoutingModule {}
