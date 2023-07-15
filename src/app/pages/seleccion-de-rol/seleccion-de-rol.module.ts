import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeleccionDeRolPageRoutingModule } from './seleccion-de-rol-routing.module';

import { SeleccionDeRolPage } from './seleccion-de-rol.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeleccionDeRolPageRoutingModule,
    SharedModule
  ],
  declarations: [SeleccionDeRolPage]
})
export class SeleccionDeRolPageModule {}
