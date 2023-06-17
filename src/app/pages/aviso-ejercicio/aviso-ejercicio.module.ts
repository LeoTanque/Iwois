import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AvisoEjercicioPageRoutingModule } from './aviso-ejercicio-routing.module';

import { AvisoEjercicioPage } from './aviso-ejercicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AvisoEjercicioPageRoutingModule
  ],
  declarations: [AvisoEjercicioPage]
})
export class AvisoEjercicioPageModule {}
