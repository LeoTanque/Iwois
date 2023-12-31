import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaPacientes2PageRoutingModule } from './busqueda-pacientes2-routing.module';

import { BusquedaPacientes2Page } from './busqueda-pacientes2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaPacientes2PageRoutingModule,
    SharedModule
  ],
  declarations: [BusquedaPacientes2Page]
})
export class BusquedaPacientes2PageModule {}
