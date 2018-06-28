import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ActionSheetController} from 'ionic-angular';
import {CreateEventPage} from '../create-event/create-event';
import{AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Event } from '../../models/event/event.interface';
import { User} from '../../models/user/user.interface';
//import { text } from '@angular/core/src/render3/instructions';
import{EditEventPage} from '../edit-event/edit-event';
import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
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
currentUser = firebase.auth().currentUser;
user={} as User
//userid:string;
  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private database: AngularFireDatabase,
     private actionSheetCtrl:ActionSheetController, private afAuth: AngularFireAuth) {
     // this.afAuth.authState.subscribe(user => {
       // if(user) this.userid = user.uid
      //})
    
   
     
      
  //   getItemsList(): FirebaseListObservable<Event[]> {
    //   if (!this.userid) return;
      this.addEventRef$ = this.database.list(`admin/${this.currentUser.uid}/events`);
      //return this.addEventRef$
    //this.addEventRef$=this.database.list(`event`);
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
