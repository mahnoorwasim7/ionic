import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UserEventDisplayPage } from './user-event-display';

@NgModule({
  declarations: [
    UserEventDisplayPage,
  ],
  imports: [
    IonicPageModule.forChild(UserEventDisplayPage),
  ],
})
export class UserEventDisplayPageModule {}
