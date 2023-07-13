import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TratamientoEjercicioPageRoutingModule } from './tratamiento-ejercicio-routing.module';

import { TratamientoEjercicioPage } from './tratamiento-ejercicio.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TratamientoEjercicioPageRoutingModule,
    SharedModule
  ],
  declarations: [TratamientoEjercicioPage]
})
export class TratamientoEjercicioPageModule {}
