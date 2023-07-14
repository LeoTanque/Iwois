import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tratamiento3PageRoutingModule } from './tratamiento3-routing.module';

import { Tratamiento3Page } from './tratamiento3.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tratamiento3PageRoutingModule,
    SharedModule
  ],
  declarations: [Tratamiento3Page]
})
export class Tratamiento3PageModule {}
