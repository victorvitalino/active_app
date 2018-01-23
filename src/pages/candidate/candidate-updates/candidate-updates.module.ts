import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateUpdatesPage } from './candidate-updates';

@NgModule({
  declarations: [
    CandidateUpdatesPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateUpdatesPage),
  ],
})
export class CandidateUpdatesPageModule {}
