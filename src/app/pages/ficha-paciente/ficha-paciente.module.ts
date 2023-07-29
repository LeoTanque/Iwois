import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaPacientePageRoutingModule } from './ficha-paciente-routing.module';

import { FichaPacientePage } from './ficha-paciente.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaPacientePageRoutingModule,
    SharedModule
  ],
  declarations: [FichaPacientePage]
})
export class FichaPacientePageModule {}
