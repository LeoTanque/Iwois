import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListaProtocolosSinPageRoutingModule } from './lista-protocolos-sin-routing.module';

import { ListaProtocolosSinPage } from './lista-protocolos-sin.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListaProtocolosSinPageRoutingModule,
    SharedModule
  ],
  declarations: [ListaProtocolosSinPage]
})
export class ListaProtocolosSinPageModule {}
