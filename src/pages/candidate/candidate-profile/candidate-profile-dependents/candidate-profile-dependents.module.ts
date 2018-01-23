import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateProfileDependentsPage } from './candidate-profile-dependents';

@NgModule({
  declarations: [
    CandidateProfileDependentsPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateProfileDependentsPage),
  ],
})
export class CandidateProfileDependentsPageModule {}
