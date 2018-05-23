import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController} from 'ionic-angular';
import {CreateEventPage} from '../create-event/create-event';
import{AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Event } from '../../models/event/event.interface';
//import { text } from '@angular/core/src/render3/instructions';
import{EditEventPage} from '../edit-event/edit-event';
//import { ActionSheet } from 'ionic-angular/components/action-sheet/action-sheet';

/**
 * Generated class for the AddEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-event',
  templateUrl: 'add-event.html',
})
export class AddEventPage {
addEventRef$:FirebaseListObservable<Event[]>
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private database: AngularFireDatabase,
     private actionSheetCtrl:ActionSheetController) {
  

    this.addEventRef$=this.database.list(`event`);
  } 
  selectEvent(event:Event){
    this.actionSheetCtrl.create({
      title:`${event.eventsName}`,
      buttons:[
     {
        text:'Edit',
        handler:()=>
        {
          this.navCtrl.push(EditEventPage,{eventId:event.$key});
          // this.addEventRef$.update(event.$key, {eventDetails: 'Heeloooooo'});}
      //this.navCtrl.push(EditEventPage,{event:this.addEventRef$.update(event.$key,{eventId:event.eventsName})});
        }
      },
      
     {
      text:'Delete',
      role:'destructive',
      handler:()=>
      {
        this.addEventRef$.remove(event.$key);
      }
    },
    {
        text:'Cancel',
        role:'cancel',
        handler:()=>
        {
      console.log("The user has selected the cancel button");
        }
    }
      ]
    
    }).present();
    
     }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEventPage');
  
  }
  navigateToCreateEventPage(){


    this.navCtrl.push(CreateEventPage)
  }
}
