import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatMedicoPage } from './chat-medico.page';

const routes: Routes = [
  {
    path: '',
    component: ChatMedicoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatMedicoPageRoutingModule {}
