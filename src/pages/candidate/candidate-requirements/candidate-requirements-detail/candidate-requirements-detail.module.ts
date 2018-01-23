import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateRequirementsDetailPage } from './candidate-requirements-detail';

@NgModule({
  declarations: [
    CandidateRequirementsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateRequirementsDetailPage),
  ],
})
export class CandidateRequirementsDetailPageModule {}
