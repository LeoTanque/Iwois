import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltrarPacientes2PageRoutingModule } from './filtrar-pacientes2-routing.module';

import { FiltrarPacientes2Page } from './filtrar-pacientes2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltrarPacientes2PageRoutingModule,
    SharedModule
  ],
  declarations: [FiltrarPacientes2Page]
})
export class FiltrarPacientes2PageModule {}
