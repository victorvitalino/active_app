import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateProfileIncomeNewPage } from './candidate-profile-income-new';

@NgModule({
  declarations: [
    CandidateProfileIncomeNewPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateProfileIncomeNewPage),
  ],
})
export class CandidateProfileIncomeNewPageModule {}
