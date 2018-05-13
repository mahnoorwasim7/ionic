import { DateTime } from "ionic-angular/components/datetime/datetime";
import { Time } from "@angular/common/src/i18n/locale_data_api";
import { EmailValidator } from "@angular/forms/src/directives/validators";

export interface Event{
    $key?:string,
    eventsName: string;
    societyName:string;
    eventTitle:string;
    location:string;
    freq: string;
    month:DateTime;
    timeStarts:Time;
    timeEnds:Time;
    eventsDetails:string;
    category:string;
    email:EmailValidator;
    number:number;
    ticketInfo:string;
   



}