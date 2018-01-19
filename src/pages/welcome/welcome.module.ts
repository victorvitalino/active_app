import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome';
import { WelcomeChatPage } from './welcome_chat/welcome_chat';

@NgModule({
  declarations: [
    WelcomePage,
    WelcomeChatPage
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage),
    IonicPageModule.forChild(WelcomeChatPage)
  ],
  exports: [
    WelcomePage,
    WelcomeChatPage
  ],
  entryComponents: [
    WelcomePage,
    WelcomeChatPage
  ]
})
export class WelcomePageModule {}
