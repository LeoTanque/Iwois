import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tratamiento5PageRoutingModule } from './tratamiento5-routing.module';

import { Tratamiento5Page } from './tratamiento5.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tratamiento5PageRoutingModule
  ],
  declarations: [Tratamiento5Page]
})
export class Tratamiento5PageModule {}
