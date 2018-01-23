import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomeNewPassPage } from './welcome-new-pass';

@NgModule({
  declarations: [
    WelcomeNewPassPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomeNewPassPage),
  ],
})
export class WelcomeNewPassPageModule {}
