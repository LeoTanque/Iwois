import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionPacientesFiltroPageRoutingModule } from './seleccion-pacientes-filtro-routing.module';

import { SeleccionPacientesFiltroPage } from './seleccion-pacientes-filtro.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionPacientesFiltroPageRoutingModule,
    SharedModule
  ],
  declarations: [SeleccionPacientesFiltroPage]
})
export class SeleccionPacientesFiltroPageModule {}
