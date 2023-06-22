import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemploVideoPageRoutingModule } from './ejemplo-video-routing.module';

import { EjemploVideoPage } from './ejemplo-video.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemploVideoPageRoutingModule
  ],
  declarations: [EjemploVideoPage]
})
export class EjemploVideoPageModule {}
