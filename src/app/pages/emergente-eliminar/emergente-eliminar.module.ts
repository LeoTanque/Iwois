import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmergenteEliminarPageRoutingModule } from './emergente-eliminar-routing.module';

import { EmergenteEliminarPage } from './emergente-eliminar.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmergenteEliminarPageRoutingModule,
    SharedModule
  ],
  declarations: [EmergenteEliminarPage]
})
export class EmergenteEliminarPageModule {}
