import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePage } from './welcome';
import { WelcomeChatPage } from './welcome_chat/welcome_chat';

@NgModule({
  declarations: [
    WelcomePage
  ],
  imports: [
    IonicPageModule.forChild(WelcomePage)
  ],
  exports: [
    WelcomePage
  ],
  entryComponents: [
    WelcomePage
  ]
})
export class WelcomePageModule {}
