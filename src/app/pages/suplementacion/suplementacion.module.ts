import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuplementacionPageRoutingModule } from './suplementacion-routing.module';

import { SuplementacionPage } from './suplementacion.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuplementacionPageRoutingModule,
    SharedModule
  ],
  declarations: [SuplementacionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SuplementacionPageModule {}
