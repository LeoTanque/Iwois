import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EjemploFotoPageRoutingModule } from './ejemplo-foto-routing.module';

import { EjemploFotoPage } from './ejemplo-foto.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EjemploFotoPageRoutingModule
  ],
  declarations: [EjemploFotoPage]
})
export class EjemploFotoPageModule {}
