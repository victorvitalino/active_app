import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeWrongPassPage } from './welcome-wrong-pass';

@NgModule({
  declarations: [
    WelcomeWrongPassPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeWrongPassPage),
  ],
})
export class WelcomeWrongPassPageModule {}
