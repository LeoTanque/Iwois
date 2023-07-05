import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaPaciente1PageRoutingModule } from './ficha-paciente1-routing.module';

import { FichaPaciente1Page } from './ficha-paciente1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaPaciente1PageRoutingModule
  ],
  declarations: [FichaPaciente1Page]
})
export class FichaPaciente1PageModule {}
