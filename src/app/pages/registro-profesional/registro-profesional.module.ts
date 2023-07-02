import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroProfesionalPageRoutingModule } from './registro-profesional-routing.module';

import { RegistroProfesionalPage } from './registro-profesional.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroProfesionalPageRoutingModule
  ],
  declarations: [RegistroProfesionalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegistroProfesionalPageModule {}
