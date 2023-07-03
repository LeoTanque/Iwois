import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BusquedaArrPageRoutingModule } from './busqueda-arr-routing.module';

import { BusquedaArrPage } from './busqueda-arr.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BusquedaArrPageRoutingModule
  ],
  declarations: [BusquedaArrPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BusquedaArrPageModule {}
