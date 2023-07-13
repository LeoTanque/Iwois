import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tratamientos2PageRoutingModule } from './tratamientos2-routing.module';

import { Tratamientos2Page } from './tratamientos2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tratamientos2PageRoutingModule,
    SharedModule
  ],
  declarations: [Tratamientos2Page]
})
export class Tratamientos2PageModule {}
