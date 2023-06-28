import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tratamiento4PageRoutingModule } from './tratamiento4-routing.module';

import { Tratamiento4Page } from './tratamiento4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tratamiento4PageRoutingModule
  ],
  declarations: [Tratamiento4Page]
})
export class Tratamiento4PageModule {}
