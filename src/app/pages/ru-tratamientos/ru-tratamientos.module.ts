import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuTratamientosPageRoutingModule } from './ru-tratamientos-routing.module';

import { RuTratamientosPage } from './ru-tratamientos.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuTratamientosPageRoutingModule,
    SharedModule
  ],
  declarations: [RuTratamientosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RuTratamientosPageModule {}
