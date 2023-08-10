import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionPacientesFiltroDifusion1PageRoutingModule } from './seleccion-pacientes-filtro-difusion1-routing.module';

import { SeleccionPacientesFiltroDifusion1Page } from './seleccion-pacientes-filtro-difusion1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionPacientesFiltroDifusion1PageRoutingModule,
    SharedModule
  ],
  declarations: [SeleccionPacientesFiltroDifusion1Page]
})
export class SeleccionPacientesFiltroDifusion1PageModule {}
