import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeChatPage } from './welcome_chat';

@NgModule({
  declarations: [
    WelcomeChatPage
  ],
  imports: [
    IonicPageModule.forChild(WelcomeChatPage)
  ],
  exports: [
    WelcomeChatPage
  ],
  entryComponents: [
    WelcomeChatPage
  ]
})
export class WelcomeChatPageModule {}
