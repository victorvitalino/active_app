import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateChatPage } from './candidate-chat';
import { ChatService } from "../../../providers/chat-service";
import { RelativeTime } from "../../../pipes/relative-time";

@NgModule({
  declarations: [
    CandidateChatPage,
    RelativeTime
  ],
  imports: [
    IonicPageModule.forChild(CandidateChatPage),
  ], 
  providers: [
    ChatService
  ]
})
export class CandidateChatPageModule {}
