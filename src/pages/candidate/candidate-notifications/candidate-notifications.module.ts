import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateNotificationsPage } from './candidate-notifications';

@NgModule({
  declarations: [
    CandidateNotificationsPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateNotificationsPage),
  ],
})
export class CandidateNotificationsPageModule {}
