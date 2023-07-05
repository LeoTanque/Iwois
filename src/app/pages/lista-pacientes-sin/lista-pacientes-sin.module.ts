import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPacientesSinPageRoutingModule } from './lista-pacientes-sin-routing.module';

import { ListaPacientesSinPage } from './lista-pacientes-sin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPacientesSinPageRoutingModule
  ],
  declarations: [ListaPacientesSinPage]
})
export class ListaPacientesSinPageModule {}
