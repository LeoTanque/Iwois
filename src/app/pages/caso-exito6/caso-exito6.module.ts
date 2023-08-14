import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasoExito6PageRoutingModule } from './caso-exito6-routing.module';

import { CasoExito6Page } from './caso-exito6.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasoExito6PageRoutingModule,
    SharedModule
  ],
  declarations: [CasoExito6Page]
})
export class CasoExito6PageModule {}
