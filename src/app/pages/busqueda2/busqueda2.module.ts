import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Busqueda2PageRoutingModule } from './busqueda2-routing.module';

import { Busqueda2Page } from './busqueda2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Busqueda2PageRoutingModule,
    SharedModule
  ],
  declarations: [Busqueda2Page]
})
export class Busqueda2PageModule {}
