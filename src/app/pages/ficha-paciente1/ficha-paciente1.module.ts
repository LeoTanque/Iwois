import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FichaPaciente1PageRoutingModule } from './ficha-paciente1-routing.module';

import { FichaPaciente1Page } from './ficha-paciente1.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FichaPaciente1PageRoutingModule,
    SharedModule
  ],
  declarations: [FichaPaciente1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class FichaPaciente1PageModule {}
