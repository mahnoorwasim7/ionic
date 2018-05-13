import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireDatabase,FirebaseObjectObservable} from 'angularfire2/database';
import {Event} from '../../models/event/event.interface';
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
  event= {} as Event;
  editEventRef$:FirebaseObjectObservable<Event>;
  constructor(public navCtrl: NavController, public navParams: NavParams,private database:AngularFireDatabase) {
  
    const eventId=this.navParams.get('eventId');
    this.editEventRef$=this.database.object(`add-event/${eventId}`);
 


 this.editEventRef$.subscribe(event=>this.event=event);
  }

  editEvent(event:Event){
    this.editEventRef$.update(event);
    
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditEventPage');
  }

}
