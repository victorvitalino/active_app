import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateProfilePageIncomeDonePage } from './candidate-profile-page-income-done';

@NgModule({
  declarations: [
    CandidateProfilePageIncomeDonePage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateProfilePageIncomeDonePage),
  ],
})
export class CandidateProfilePageIncomeDonePageModule {}
