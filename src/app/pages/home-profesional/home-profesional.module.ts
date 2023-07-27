import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeProfesionalPageRoutingModule } from './home-profesional-routing.module';

import { HomeProfesionalPage } from './home-profesional.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeProfesionalPageRoutingModule,
     SharedModule
  ],
  declarations: [HomeProfesionalPage]
})
export class HomeProfesionalPageModule {}
