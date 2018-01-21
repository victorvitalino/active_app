import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeNoUserPage } from './welcome-no-user';

@NgModule({
  declarations: [
    WelcomeNoUserPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeNoUserPage),
  ],
})
export class WelcomeNoUserPageModule {}
