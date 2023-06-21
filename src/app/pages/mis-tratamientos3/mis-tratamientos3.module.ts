import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisTratamientos3PageRoutingModule } from './mis-tratamientos3-routing.module';

import { MisTratamientos3Page } from './mis-tratamientos3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisTratamientos3PageRoutingModule
  ],
  declarations: [MisTratamientos3Page]
})
export class MisTratamientos3PageModule {}
