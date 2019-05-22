import { Component, OnInit } from '@angular/core';
import { ILocker, IReservation, IStudent } from '../Service/database-service.service';
import { LoadingController } from '@ionic/angular';
import { DatabaseService } from '../Service/database-service.service';
import { ActivatedRoute, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-reserveer',
  templateUrl: './reserveer.page.html',
  styleUrls: ['./reserveer.page.scss'],
})
export class ReserveerPage implements OnInit {

  customYearValues:any;
  customDayShortNames:any;
  customPickerOptions:any;

  lockers:ILocker
  OpenClose:ILocker;

  resv: IReservation

  locker:ILocker
  startDate:Date = new Date();
  endDate:Date = new Date();
  student:IStudent

  constructor(public route: Router, public ActivatedRoute: ActivatedRoute, public loadingController: LoadingController, public dbSvc: DatabaseService){

    this.dbSvc.GetLockers().subscribe(locker =>{
      console.log(locker)
      this.lockers = locker;      
    },err => console.log(err.message))

    this.dbSvc.GetReservations().subscribe(reser =>{
      console.log(reser)
      this.resv = reser;      
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

  Reserveren(lkr){
    
    
    let res: IReservation = {
      "startDate": this.startDate,
      "endDate": this.endDate,
      "student": ["5c893191cf2ab546cccfe986"] ,
      "locker": lkr
    }
    console.log(res)
    this.dbSvc.Reserveren(res)

    /* this.route.navigate([`reserveren/${id}`]) */
  }
}
