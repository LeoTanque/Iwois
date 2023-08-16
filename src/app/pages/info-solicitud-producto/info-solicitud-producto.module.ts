import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InfoSolicitudProductoPageRoutingModule } from './info-solicitud-producto-routing.module';

import { InfoSolicitudProductoPage } from './info-solicitud-producto.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InfoSolicitudProductoPageRoutingModule,
    SharedModule
  ],
  declarations: [InfoSolicitudProductoPage]
})
export class InfoSolicitudProductoPageModule {}
