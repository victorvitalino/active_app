import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewsinglePage } from './newsingle';

@NgModule({
  declarations: [
    NewsinglePage,
  ],
  imports: [
    IonicPageModule.forChild(NewsinglePage),
  ],
})
export class NewsinglePageModule {}
