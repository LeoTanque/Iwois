import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NuevaDifusionPageRoutingModule } from './nueva-difusion-routing.module';

import { NuevaDifusionPage } from './nueva-difusion.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NuevaDifusionPageRoutingModule,
    SharedModule
  ],
  declarations: [NuevaDifusionPage]
})
export class NuevaDifusionPageModule {}
