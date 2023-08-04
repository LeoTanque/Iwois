import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProtocolosConPageRoutingModule } from './lista-protocolos-con-routing.module';

import { ListaProtocolosConPage } from './lista-protocolos-con.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    IonicModule,
    ListaProtocolosConPageRoutingModule,
    SharedModule
  ],
  declarations: [ListaProtocolosConPage]
})
export class ListaProtocolosConPageModule {}
