import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosAdicionalesVenderPageRoutingModule } from './servicios-adicionales-vender-routing.module';

import { ServiciosAdicionalesVenderPage } from './servicios-adicionales-vender.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosAdicionalesVenderPageRoutingModule,
    SharedModule
  ],
  declarations: [ServiciosAdicionalesVenderPage]
})
export class ServiciosAdicionalesVenderPageModule {}
