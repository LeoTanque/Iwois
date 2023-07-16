import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular'; 

import { BusquedaArrPageRoutingModule } from './busqueda-arr-routing.module';

import { BusquedaArrPage } from './busqueda-arr.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({ 
  imports: [
    CommonModule, 
    FormsModule,
    IonicModule,
    BusquedaArrPageRoutingModule,
    SharedModule
  ],
  declarations: [BusquedaArrPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BusquedaArrPageModule {}
