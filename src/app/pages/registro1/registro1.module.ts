import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Registro1PageRoutingModule } from './registro1-routing.module';

import { Registro1Page } from './registro1.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
@NgModule({
  imports: [ 
    CommonModule,
    FormsModule,
    IonicModule,
    Registro1PageRoutingModule
  ],
  declarations: [Registro1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class Registro1PageModule {}
