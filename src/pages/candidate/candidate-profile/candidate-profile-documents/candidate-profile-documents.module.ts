import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateProfileDocumentsPage } from './candidate-profile-documents';

@NgModule({
  declarations: [
    CandidateProfileDocumentsPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateProfileDocumentsPage),
  ],
})
export class CandidateProfileDocumentsPageModule {}
