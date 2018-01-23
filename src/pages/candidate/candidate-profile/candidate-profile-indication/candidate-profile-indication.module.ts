import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateProfileIndicationPage } from './candidate-profile-indication';

@NgModule({
  declarations: [
    CandidateProfileIndicationPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateProfileIndicationPage),
  ],
})
export class CandidateProfileIndicationPageModule {}
