import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelIdiomaPageRoutingModule } from './sel-idioma-routing.module';

import { SelIdiomaPage } from './sel-idioma.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelIdiomaPageRoutingModule,
    SharedModule
  ],
  declarations: [SelIdiomaPage]
})
export class SelIdiomaPageModule {}
