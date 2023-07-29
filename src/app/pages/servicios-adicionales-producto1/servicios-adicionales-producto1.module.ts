import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular'; 

import { ServiciosAdicionalesProducto1PageRoutingModule } from './servicios-adicionales-producto1-routing.module';

import { ServiciosAdicionalesProducto1Page } from './servicios-adicionales-producto1.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosAdicionalesProducto1PageRoutingModule,
    SharedModule
  ],
  declarations: [ServiciosAdicionalesProducto1Page],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ServiciosAdicionalesProducto1PageModule {}
