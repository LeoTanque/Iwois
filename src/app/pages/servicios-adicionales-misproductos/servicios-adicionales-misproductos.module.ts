import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ServiciosAdicionalesMisproductosPageRoutingModule } from './servicios-adicionales-misproductos-routing.module';

import { ServiciosAdicionalesMisproductosPage } from './servicios-adicionales-misproductos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ServiciosAdicionalesMisproductosPageRoutingModule,
    SharedModule
  ],
  declarations: [ServiciosAdicionalesMisproductosPage]
})
export class ServiciosAdicionalesMisproductosPageModule {}
