import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionarPacientePageRoutingModule } from './seleccionar-paciente-routing.module';

import { SeleccionarPacientePage } from './seleccionar-paciente.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionarPacientePageRoutingModule,
    SharedModule
  ],
  declarations: [SeleccionarPacientePage]
})
export class SeleccionarPacientePageModule {}
