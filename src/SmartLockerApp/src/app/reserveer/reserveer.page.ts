import { Component, OnInit } from '@angular/core';
import { IReservation, DatabaseService, ILocker } from '../Service/database-service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-reserveer',
  templateUrl: './reserveer.page.html',
  styleUrls: ['./reserveer.page.scss'],
})
export class ReserveerPage implements OnInit {

  customYearValues:any;
  customDayShortNames:any;
  customPickerOptions:any;

  reservatie:IReservation
  lockers:ILocker
  startDate:string;
  OpenClose:ILocker;
  
  constructor(public loadingController: LoadingController, public reservation: DatabaseService){
    console.log("datum")
    this.reservation.GetReservations().subscribe(reserveer =>{
      console.log(reserveer)
      this.reservatie = reserveer
    },err => console.log(err.message))

    this.reservation.GetLockers().subscribe(locker =>{
      console.log(locker)
      this.lockers = locker
    },err => console.log(err.message))
  }

  ngOnInit() {

    this.customYearValues = [2020, 2016, 2008, 2004, 2000, 1996];

    this.customDayShortNames = [
      'Ma',
      'Di',
      'Woe',
      'Don',
      'Vrij'
    ];

    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: () => console.log('Clicked Save!')
        }, {
          text: 'Log',
          handler: () => {
            console.log('Clicked Log. Do not Dismiss.');
            return false;
          }
        }]
      }
  }

  async Reserveren(){
      const loading = await this.loadingController.create({
        spinner: "crescent",
        duration: 3000,
        message: 'busy with reservation',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });

      return await loading.present();
  }

  /* mee(id: string){
    this.reservation.Reserveren(id)
  } */
}
