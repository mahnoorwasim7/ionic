import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { EventDetailsUserPage } from '../event-details-user/event-details-user';
import { Event } from '../../models/event/event.interface';
import{User}from '../../models/user/user.interface';
import firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-user-event-display',
  templateUrl: 'user-event-display.html',
})
export class UserEventDisplayPage {
  event= {} as Event
  user ={}as User
  addEventRef$:FirebaseListObservable<Event[]>
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private database: AngularFireDatabase
     ) {
    this.addEventRef$= this.database.list(`admin/`);
  } 
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserEventDisplayPage');
  }
  viewDetail(event:Event){
    this.navCtrl.push(EventDetailsUserPage,{eventId:event.$key});
 
  }
}
