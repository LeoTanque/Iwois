import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltrarPacientesPageRoutingModule } from './filtrar-pacientes-routing.module';

import { FiltrarPacientesPage } from './filtrar-pacientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltrarPacientesPageRoutingModule
  ],
  declarations: [FiltrarPacientesPage]
})
export class FiltrarPacientesPageModule {}
