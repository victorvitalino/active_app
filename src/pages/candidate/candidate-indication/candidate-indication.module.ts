import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateIndicationPage } from './candidate-indication';

@NgModule({
  declarations: [
    CandidateIndicationPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateIndicationPage),
  ],
})
export class CandidateIndicationPageModule {}
