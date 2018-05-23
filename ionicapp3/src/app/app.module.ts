import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AddEventPage } from '../pages/add-event/add-event';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import{EditEventPage} from '../pages/edit-event/edit-event';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {CreateEventPage} from '../pages/create-event/create-event';
import { LoginPage } from '../pages/login/login';
import{UserEventDisplayPage} from '../pages/user-event-display/user-event-display';
import { EventDetailsUserPage } from '../pages/event-details-user/event-details-user';
import { RegisterPage } from '../pages/register/register';
import { AngularFireAuthModule } from 'angularfire2/auth';

const config = {
  apiKey: "AIzaSyB4btNsbchBbHIHy2nT18py8OmemDcWQm8",
  authDomain: "ned-eventia.firebaseapp.com",
  databaseURL: "https://ned-eventia.firebaseio.com",
  projectId: "ned-eventia",
  storageBucket: "ned-eventia.appspot.com",
  messagingSenderId: "285878167231"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
     AddEventPage,
     CreateEventPage,
     LoginPage,
    RegisterPage,
    EditEventPage,
    UserEventDisplayPage,
    EventDetailsUserPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
     AngularFireModule.initializeApp(config),
     AngularFireDatabaseModule,
     AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    HomePage,
     AddEventPage,
     CreateEventPage,
     EditEventPage,
     UserEventDisplayPage,
     EventDetailsUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
   
  ]
})
export class AppModule {}
