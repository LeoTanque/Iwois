import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerTodoProgresoPageRoutingModule } from './ver-todo-progreso-routing.module';

import { VerTodoProgresoPage } from './ver-todo-progreso.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerTodoProgresoPageRoutingModule,
    SharedModule
  ],
  declarations: [VerTodoProgresoPage]
})
export class VerTodoProgresoPageModule {}
