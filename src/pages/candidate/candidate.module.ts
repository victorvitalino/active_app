import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidatePage } from './candidate';

@NgModule({
  declarations: [
    CandidatePage,
  ],
  imports: [
    IonicPageModule.forChild(CandidatePage),
  ],
})
export class CandidatePageModule {}
