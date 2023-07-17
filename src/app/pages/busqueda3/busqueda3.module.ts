import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Busqueda3PageRoutingModule } from './busqueda3-routing.module';

import { Busqueda3Page } from './busqueda3.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Busqueda3PageRoutingModule,
    SharedModule
  ],
  declarations: [Busqueda3Page]
})
export class Busqueda3PageModule {}
