import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListadoPacientesDifusionPageRoutingModule } from './listado-pacientes-difusion-routing.module';

import { ListadoPacientesDifusionPage } from './listado-pacientes-difusion.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListadoPacientesDifusionPageRoutingModule,
    SharedModule
  ],
  declarations: [ListadoPacientesDifusionPage]
})
export class ListadoPacientesDifusionPageModule {}
