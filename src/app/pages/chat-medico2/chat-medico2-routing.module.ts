import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatMedico2Page } from './chat-medico2.page';

const routes: Routes = [
  {
    path: '',
    component: ChatMedico2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatMedico2PageRoutingModule {}
