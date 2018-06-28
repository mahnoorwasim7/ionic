import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Event } from '../../models/event/event.interface';
import { Events } from 'ionic-angular/util/events';
import{AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { UserEventDisplayPage } from '../user-event-display/user-event-display';
import { User} from '../../models/user/user.interface'; 
import firebase from 'firebase';
@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {

  event= {} as Event
user={} as User
currentUser = firebase.auth().currentUser;
 
  eventRef$:FirebaseListObservable<Event[]>
 
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase, private afAuth: AngularFireAuth  ) {

      this.eventRef$ = this.database.list(`admin/${this.currentUser.uid}/events`);       
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateEventPage');
  }


createEvent( event:Event){
 this.eventRef$.push({
  eventsName: this.event.eventsName ,
  societyName:this.event.societyName,
  eventTitle: this.event.eventTitle ,
  location: this.event.location,
  freq:this.event.freq,
  month:this.event.month,
  timeStarts:this.event.timeStarts,
  timeEnds:this.event.timeEnds,
  category:this.event.category,
  eventsDetails:this.event.eventsDetails,
  email:this.event.email,
  number:this.event.number,
  ticketInfo:this.event.ticketInfo

 });

 this.event={} as Event;
 this.navCtrl.pop();

}

}
