import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WelcomePassPage } from './welcome-pass';

@NgModule({
  declarations: [
    WelcomePassPage,
  ],
  imports: [
    IonicPageModule.forChild(WelcomePassPage),
  ],
})
export class WelcomePassPageModule {}
