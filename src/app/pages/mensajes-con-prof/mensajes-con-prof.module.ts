import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MensajesConProfPageRoutingModule } from './mensajes-con-prof-routing.module';

import { MensajesConProfPage } from './mensajes-con-prof.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MensajesConProfPageRoutingModule,
    SharedModule
  ],
  declarations: [MensajesConProfPage]
})
export class MensajesConProfPageModule {}
