import { Component, OnInit } from '@angular/core';
import { ILocker, IReservation, IStudent } from '../Service/database-service.service';
import { LoadingController } from '@ionic/angular';
import { DatabaseService } from '../Service/database-service.service';
import { ActivatedRoute, Router } from '@angular/router';

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

  resv: IReservation

  locker:ILocker
  startDate:Date = new Date();
  endDate:Date = new Date();
  student:IStudent

  arr:any[]

  constructor(public route: Router, public ActivatedRoute: ActivatedRoute, public loadingController: LoadingController, public dbSvc: DatabaseService){
    this.dbSvc.GetReservations().subscribe(reser =>{
      console.log(reser)
      this.resv = reser;
    },err => console.log(err.message))
  

    this.dbSvc.GetLockers().subscribe(locker =>{
      console.log(locker)
      this.lockers = locker;
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

  async Reserveren(lkr){
    
    let res: IReservation = {
      "startDate": this.startDate,
      "endDate": this.endDate,
      "student": ["5c891efa84171f02947be833"] ,
      "locker": lkr
    }

    const loading = await this.loadingController.create({
      spinner: "dots",
      duration: 3000,
      message: 'Please wait...',
      translucent: true,
      cssClass: 'custom-class custom-loading'
    });
    
    console.log(res)
    this.dbSvc.Reserveren(res)
    this.dbSvc.UpdateLockerReservatie(res.locker._id)
    
    return await loading.present();
  }
}