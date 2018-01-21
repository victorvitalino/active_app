import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateChatPage } from './candidate-chat';

@NgModule({
  declarations: [
    CandidateChatPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateChatPage),
  ],
})
export class CandidateChatPageModule {}
