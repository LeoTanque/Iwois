import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeProfesionalPageRoutingModule } from './home-profesional-routing.module';

import { HomeProfesionalPage } from './home-profesional.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProfesionalPageRoutingModule
  ],
  declarations: [HomeProfesionalPage]
})
export class HomeProfesionalPageModule {}
