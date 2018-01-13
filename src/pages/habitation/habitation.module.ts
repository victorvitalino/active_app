import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitationPage } from './habitation';

@NgModule({
  declarations: [
    HabitationPage,
  ],
  imports: [
    IonicPageModule.forChild(HabitationPage),
  ],
})
export class HabitationPageModule {}
