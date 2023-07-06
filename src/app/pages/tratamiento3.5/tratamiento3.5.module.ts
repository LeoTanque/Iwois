import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tratamiento35PageRoutingModule } from './tratamiento3.5-routing.module';

import { Tratamiento35Page } from './tratamiento3.5.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tratamiento35PageRoutingModule
  ],
  declarations: [Tratamiento35Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tratamiento35PageModule {}
