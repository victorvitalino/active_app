import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateUpdatesDetailPage } from './candidate-updates-detail';

@NgModule({
  declarations: [
    CandidateUpdatesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateUpdatesDetailPage),
  ],
})
export class CandidateUpdatesDetailPageModule {}
