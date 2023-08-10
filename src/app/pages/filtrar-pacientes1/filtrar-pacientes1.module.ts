import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FiltrarPacientes1PageRoutingModule } from './filtrar-pacientes1-routing.module';

import { FiltrarPacientes1Page } from './filtrar-pacientes1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FiltrarPacientes1PageRoutingModule, 
    SharedModule
  ],
  declarations: [FiltrarPacientes1Page]
})
export class FiltrarPacientes1PageModule {}
