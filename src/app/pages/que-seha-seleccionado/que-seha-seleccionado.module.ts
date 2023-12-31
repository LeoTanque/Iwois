import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QueSehaSeleccionadoPageRoutingModule } from './que-seha-seleccionado-routing.module';

import { QueSehaSeleccionadoPage } from './que-seha-seleccionado.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QueSehaSeleccionadoPageRoutingModule,
    SharedModule
  ],
  declarations: [QueSehaSeleccionadoPage]
})
export class QueSehaSeleccionadoPageModule {}
