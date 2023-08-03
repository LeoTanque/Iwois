import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionPrePostProtocoloPageRoutingModule } from './seleccion-pre-post-protocolo-routing.module';

import { SeleccionPrePostProtocoloPage } from './seleccion-pre-post-protocolo.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionPrePostProtocoloPageRoutingModule,
    SharedModule
  ],
  declarations: [SeleccionPrePostProtocoloPage]
})
export class SeleccionPrePostProtocoloPageModule {}
