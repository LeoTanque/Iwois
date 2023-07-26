import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesConPageRoutingModule } from './mensajes-con-routing.module';

import { MensajesConPage } from './mensajes-con.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesConPageRoutingModule,
    SharedModule
  ],
  declarations: [MensajesConPage]
})
export class MensajesConPageModule {}
