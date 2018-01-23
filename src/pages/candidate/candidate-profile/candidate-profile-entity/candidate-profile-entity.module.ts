import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateProfileEntityPage } from './candidate-profile-entity';

@NgModule({
  declarations: [
    CandidateProfileEntityPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateProfileEntityPage),
  ],
})
export class CandidateProfileEntityPageModule {}
