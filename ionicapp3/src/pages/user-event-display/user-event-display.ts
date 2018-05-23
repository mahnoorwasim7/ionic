import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { EventDetailsUserPage } from '../event-details-user/event-details-user';
import { Event } from '../../models/event/event.interface';
/**
 * Generated class for the UserEventDisplayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-event-display',
  templateUrl: 'user-event-display.html',
})
export class UserEventDisplayPage {
  event= {} as Event
  addEventRef$:FirebaseListObservable<Event[]>
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private database: AngularFireDatabase
     ) {
  

    this.addEventRef$=this.database.list(`event`);
  } 


  ionViewDidLoad() {
    console.log('ionViewDidLoad UserEventDisplayPage');
  }


  viewDetail(event:Event){
  

    this.navCtrl.push(EventDetailsUserPage,{eventId:event.$key});
//this.navCtrl.push(EventDetailsUserPage);   
  }
}
