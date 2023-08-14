import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasoExito5PageRoutingModule } from './caso-exito5-routing.module';

import { CasoExito5Page } from './caso-exito5.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasoExito5PageRoutingModule,
    SharedModule
  ],
  declarations: [CasoExito5Page]
})
export class CasoExito5PageModule {}
