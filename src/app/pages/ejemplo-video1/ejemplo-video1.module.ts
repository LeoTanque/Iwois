import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemploVideo1PageRoutingModule } from './ejemplo-video1-routing.module';

import { EjemploVideo1Page } from './ejemplo-video1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemploVideo1PageRoutingModule
  ],
  declarations: [EjemploVideo1Page]
})
export class EjemploVideo1PageModule {}
