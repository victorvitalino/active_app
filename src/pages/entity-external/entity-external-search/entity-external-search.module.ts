import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntityExternalSearchPage } from './entity-external-search';

@NgModule({
  declarations: [
    EntityExternalSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(EntityExternalSearchPage),
  ],
})
export class EntityExternalSearchPageModule {}
