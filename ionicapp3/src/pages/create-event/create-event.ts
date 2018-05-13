import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Event } from '../../models/event/event.interface';
import { Events } from 'ionic-angular/util/events';
import{AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
//import { Events } from 'ionic-angular/util/events';
/**
 * Generated class for the CreateEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-event',
  templateUrl: 'create-event.html',
})
export class CreateEventPage {

  event= {} as Event
  eventRef$:FirebaseListObservable<Event[]>
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase  ) {
  
  this.eventRef$= this.database.list(`event`);
  
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
