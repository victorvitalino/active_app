import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateSchedulesPage } from './candidate-schedules';

@NgModule({
  declarations: [
    CandidateSchedulesPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateSchedulesPage),
  ],
})
export class CandidateSchedulesPageModule {}
