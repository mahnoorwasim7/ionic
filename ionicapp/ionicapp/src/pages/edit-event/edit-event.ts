import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import{AngularFireDatabase,FirebaseObjectObservable }from 'angularfire2/database';
import {Event}from '../../models/event/event.interface';
import { Events } from 'ionic-angular/util/events';
import { AddEventPage } from '../add-event/add-event';
/**
 * Generated class for the EditEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-event',
  templateUrl: 'edit-event.html',
})
export class EditEventPage {

  eventRef$:FirebaseObjectObservable<Event>;
  event ={} as Event;
  constructor(public navCtrl: NavController, public navParams: NavParams, private database:AngularFireDatabase) {
  
  const eventId=this.navParams.get('eventId');

  console.log(eventId);
    this.eventRef$=this.database.object(`event/${eventId}`);
    this.eventRef$.subscribe(event=>this.event=event);


  
  }
  editEvent(event:Event){
this.eventRef$.update(event);
this.navCtrl.push(AddEventPage);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEventPage');
  }

}
