import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionFechaTratamientoPageRoutingModule } from './seleccion-fecha-tratamiento-routing.module';

import { SeleccionFechaTratamientoPage } from './seleccion-fecha-tratamiento.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionFechaTratamientoPageRoutingModule,
    SharedModule
  ],
  declarations: [SeleccionFechaTratamientoPage]
})
export class SeleccionFechaTratamientoPageModule {}
