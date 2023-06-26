import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RuTratamientosPageRoutingModule } from './ru-tratamientos-routing.module';

import { RuTratamientosPage } from './ru-tratamientos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RuTratamientosPageRoutingModule
  ],
  declarations: [RuTratamientosPage]
})
export class RuTratamientosPageModule {}
