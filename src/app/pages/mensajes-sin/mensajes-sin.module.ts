import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesSinPageRoutingModule } from './mensajes-sin-routing.module';

import { MensajesSinPage } from './mensajes-sin.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesSinPageRoutingModule,
    SharedModule
  ],
  declarations: [MensajesSinPage]
})
export class MensajesSinPageModule {}
