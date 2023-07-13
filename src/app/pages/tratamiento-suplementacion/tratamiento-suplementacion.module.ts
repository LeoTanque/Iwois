import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TratamientoSuplementacionPageRoutingModule } from './tratamiento-suplementacion-routing.module';

import { TratamientoSuplementacionPage } from './tratamiento-suplementacion.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TratamientoSuplementacionPageRoutingModule,
    SharedModule
  ],
  declarations: [TratamientoSuplementacionPage]
})
export class TratamientoSuplementacionPageModule {}
