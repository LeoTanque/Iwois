import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerProtocoloCreadoAdmin3PageRoutingModule } from './ver-protocolo-creado-admin3-routing.module';

import { VerProtocoloCreadoAdmin3Page } from './ver-protocolo-creado-admin3.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerProtocoloCreadoAdmin3PageRoutingModule,
    SharedModule
  ],
  declarations: [VerProtocoloCreadoAdmin3Page]
})
export class VerProtocoloCreadoAdmin3PageModule {}
