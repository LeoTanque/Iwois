import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerProtocoloCreadoAdmin1PageRoutingModule } from './ver-protocolo-creado-admin1-routing.module';

import { VerProtocoloCreadoAdmin1Page } from './ver-protocolo-creado-admin1.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerProtocoloCreadoAdmin1PageRoutingModule,
    SharedModule
  ],
  declarations: [VerProtocoloCreadoAdmin1Page]
})
export class VerProtocoloCreadoAdmin1PageModule {}
