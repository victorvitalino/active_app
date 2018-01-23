import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HabitationSearchPage } from './habitation-search';

@NgModule({
  declarations: [
    HabitationSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(HabitationSearchPage),
  ],
})
export class HabitationSearchPageModule {}
