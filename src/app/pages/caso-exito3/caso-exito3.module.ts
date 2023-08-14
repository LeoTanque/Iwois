import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CasoExito3PageRoutingModule } from './caso-exito3-routing.module';

import { CasoExito3Page } from './caso-exito3.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CasoExito3PageRoutingModule,
    SharedModule
  ],
  declarations: [CasoExito3Page]
})
export class CasoExito3PageModule {}
