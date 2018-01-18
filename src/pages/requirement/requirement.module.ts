import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RequirementPage } from './requirement';

@NgModule({
  declarations: [
    RequirementPage,
  ],
  imports: [
    IonicPageModule.forChild(RequirementPage),
  ],
})
export class RequirementPageModule {}
