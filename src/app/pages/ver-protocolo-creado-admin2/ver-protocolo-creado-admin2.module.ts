import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerProtocoloCreadoAdmin2PageRoutingModule } from './ver-protocolo-creado-admin2-routing.module';

import { VerProtocoloCreadoAdmin2Page } from './ver-protocolo-creado-admin2.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerProtocoloCreadoAdmin2PageRoutingModule,
    SharedModule
  ],
  declarations: [VerProtocoloCreadoAdmin2Page]
})
export class VerProtocoloCreadoAdmin2PageModule {}
