import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasoExito4PageRoutingModule } from './caso-exito4-routing.module';

import { CasoExito4Page } from './caso-exito4.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasoExito4PageRoutingModule,
    SharedModule
  ],
  declarations: [CasoExito4Page]
})
export class CasoExito4PageModule {}
