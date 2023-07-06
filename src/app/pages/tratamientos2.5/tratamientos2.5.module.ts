import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tratamientos25PageRoutingModule } from './tratamientos2.5-routing.module';

import { Tratamientos25Page } from './tratamientos2.5.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({ 
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tratamientos25PageRoutingModule
  ],
  declarations: [Tratamientos25Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tratamientos25PageModule {}
