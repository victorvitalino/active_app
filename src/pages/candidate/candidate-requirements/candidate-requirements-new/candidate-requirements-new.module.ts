import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CandidateRequirementsNewPage } from './candidate-requirements-new';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    CandidateRequirementsNewPage,
  ],
  imports: [
    IonicPageModule.forChild(CandidateRequirementsNewPage),
  ],
  providers: [
    FileTransfer,
    FileTransferObject,
    File,
    Camera
  ]
})
export class CandidateRequirementsNewPageModule {}
