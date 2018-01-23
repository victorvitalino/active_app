import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateNotificationsDetailPage } from './candidate-notifications-detail';

@NgModule({
  declarations: [
    CandidateNotificationsDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateNotificationsDetailPage),
  ],
})
export class CandidateNotificationsDetailPageModule {}
