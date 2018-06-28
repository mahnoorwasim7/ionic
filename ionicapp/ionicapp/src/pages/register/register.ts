import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import{HomePage} from '../home/home';
import{User} from '../../models/user/user.interface';
import{AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  @ViewChild('username') users;
  @ViewChild('password') password;
  
  user= {} as User
  userRef$:FirebaseListObservable<User[]>

  constructor(private alertCtrl: AlertController,
     private fire: AngularFireAuth,
     public navCtrl: NavController,
      public navParams: NavParams,
        private database: AngularFireDatabase) {
  
        this.userRef$= this.database.list(`user`);
        const userId=this.navParams.get('userId');
        console.log(userId);
      
      }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  alert(message: string) {
    this.alertCtrl.create({
      title: 'Info!',
      subTitle: message,
      buttons: ['OK']
    }).present();
  }

  registerUser(user:User) {
   
    this.fire.auth.createUserWithEmailAndPassword(this.users.value , this.password.value)
    .then(data => {
      console.log('got data ', data);
      this.alert('Registered!');
      this.navCtrl.setRoot(HomePage);
      this.userRef$.push({
        username:this.user.userName,
        password:this.user.password,
      
        
        
            });
        
        
            this.user={} as User;
    })
    .catch(error => {
      console.log('got an error ', error);
      this.alert(error.message);
    });
  	console.log('Would register user with ', this.users.value, this.password.value);
  }
}
