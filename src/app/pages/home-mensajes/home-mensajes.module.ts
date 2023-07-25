import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMensajesPageRoutingModule } from './home-mensajes-routing.module';

import { HomeMensajesPage } from './home-mensajes.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMensajesPageRoutingModule,
    SharedModule
  ],
  declarations: [HomeMensajesPage]
})
export class HomeMensajesPageModule {}
