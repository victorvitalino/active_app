import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EntityExternalLoginPage } from './entity-external-login';

@NgModule({
  declarations: [
    EntityExternalLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(EntityExternalLoginPage),
  ],
})
export class EntityExternalLoginPageModule {}
