import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Notificaciones2PageRoutingModule } from './notificaciones2-routing.module';

import { Notificaciones2Page } from './notificaciones2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Notificaciones2PageRoutingModule
  ],
  declarations: [Notificaciones2Page]
})
export class Notificaciones2PageModule {}
