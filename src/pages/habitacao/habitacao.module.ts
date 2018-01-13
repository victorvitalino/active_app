import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitacaoPage } from './habitacao';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    HabitacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(HabitacaoPage),
  ],
  providers: [
  FileTransfer,
  FileTransferObject,
  File,
  Camera
]
})
export class HabitacaoPageModule {}
