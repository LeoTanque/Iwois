import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltrarPacientesPageRoutingModule } from './filtrar-pacientes-routing.module';

import { FiltrarPacientesPage } from './filtrar-pacientes.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltrarPacientesPageRoutingModule,
    SharedModule
  ],
  declarations: [FiltrarPacientesPage]
})
export class FiltrarPacientesPageModule {}
