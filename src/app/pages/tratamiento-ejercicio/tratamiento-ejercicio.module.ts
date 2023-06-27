import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TratamientoEjercicioPageRoutingModule } from './tratamiento-ejercicio-routing.module';

import { TratamientoEjercicioPage } from './tratamiento-ejercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TratamientoEjercicioPageRoutingModule
  ],
  declarations: [TratamientoEjercicioPage]
})
export class TratamientoEjercicioPageModule {}
