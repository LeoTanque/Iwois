import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionDeRolPageRoutingModule } from './seleccion-de-rol-routing.module';

import { SeleccionDeRolPage } from './seleccion-de-rol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionDeRolPageRoutingModule
  ],
  declarations: [SeleccionDeRolPage]
})
export class SeleccionDeRolPageModule {}
