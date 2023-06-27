import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuTratamientosProgresoPageRoutingModule } from './ru-tratamientos-progreso-routing.module';

import { RuTratamientosProgresoPage } from './ru-tratamientos-progreso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuTratamientosProgresoPageRoutingModule
  ],
  declarations: [RuTratamientosProgresoPage]
})
export class RuTratamientosProgresoPageModule {}
