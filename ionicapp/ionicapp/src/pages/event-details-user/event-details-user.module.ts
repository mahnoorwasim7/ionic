import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventDetailsUserPage } from './event-details-user';

@NgModule({
  declarations: [
    EventDetailsUserPage,
  ],
  imports: [
    IonicPageModule.forChild(EventDetailsUserPage),
  ],
})
export class EventDetailsUserPageModule {}
