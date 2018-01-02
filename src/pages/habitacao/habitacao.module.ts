import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitacaoPage } from './habitacao';

@NgModule({
  declarations: [
    HabitacaoPage,
  ],
  imports: [
    IonicPageModule.forChild(HabitacaoPage),
  ],
})
export class HabitacaoPageModule {}
