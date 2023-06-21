import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisTratamientosPageRoutingModule } from './mis-tratamientos-routing.module';

import { MisTratamientosPage } from './mis-tratamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisTratamientosPageRoutingModule
  ],
  declarations: [MisTratamientosPage]
})
export class MisTratamientosPageModule {}
