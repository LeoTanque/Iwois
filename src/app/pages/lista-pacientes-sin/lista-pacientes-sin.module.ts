import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaPacientesSinPageRoutingModule } from './lista-pacientes-sin-routing.module';

import { ListaPacientesSinPage } from './lista-pacientes-sin.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaPacientesSinPageRoutingModule,
    SharedModule
  ],
  declarations: [ListaPacientesSinPage]
})
export class ListaPacientesSinPageModule {}
