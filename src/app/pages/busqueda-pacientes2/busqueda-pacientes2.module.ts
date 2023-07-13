import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaPacientes2PageRoutingModule } from './busqueda-pacientes2-routing.module';

import { BusquedaPacientes2Page } from './busqueda-pacientes2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaPacientes2PageRoutingModule,
    
  ],
  declarations: [BusquedaPacientes2Page]
})
export class BusquedaPacientes2PageModule {}
