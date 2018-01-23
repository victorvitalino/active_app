import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateProfileCadastrePage } from './candidate-profile-cadastre';

@NgModule({
  declarations: [
    CandidateProfileCadastrePage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateProfileCadastrePage),
  ],
})
export class CandidateProfileCadastrePageModule {}
