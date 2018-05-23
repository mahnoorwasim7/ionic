import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Event}from '../../models/event/event.interface';
import{AngularFireDatabase,FirebaseObjectObservable }from 'angularfire2/database';
//import {Event}from '../../models/event/event.interface';
/**
 * Generated class for the EventDetailsUserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-event-details-user',
  templateUrl: 'event-details-user.html',
})
export class EventDetailsUserPage {
  addEventRef$:FirebaseObjectObservable<Event>
  event ={} as Event;
  
  constructor(public navCtrl: NavController, public navParams: NavParams,private database: AngularFireDatabase, private alertCtrl:AlertController) {
  
    
  const eventId=this.navParams.get('eventId');

  console.log(eventId);
    this.addEventRef$=this.database.object(`event/${eventId}`);
    
    this.addEventRef$.subscribe(event=>this.event=event);

  
  }

fav(event:Event){
    const alert = this.alertCtrl.create({
      title:'Add Event',
      subTitle: 'Are You sure?',
      message:'Are you sure you want to add this event?',
      buttons:[{
        text: 'Yes, go ahead',
        handler:()=>{
          this.addEventRef$.set(event);
        }
      },{
        text: 'No, I changed my mind!',
        role:'cancel',
        handler:()=>{
          console.log('Cancelled!');
      }}]
    });
    alert.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventDetailsUserPage');
  }

}
