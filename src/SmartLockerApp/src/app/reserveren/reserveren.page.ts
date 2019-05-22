import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService, IReservation, ILocker, IStudent } from '../Service/database-service.service';

@Component({
  selector: 'app-reserveren',
  templateUrl: './reserveren.page.html',
  styleUrls: ['./reserveren.page.scss'],
})
export class ReserverenPage implements OnInit {

  id:any
  locker:ILocker
  reservatie:IReservation[]

  startDate:Date = new Date();
  endDate:Date = new Date();
  student:IStudent

  constructor(public activatedRoute: ActivatedRoute, public dbSvc: DatabaseService) { 
    this.id = this.activatedRoute.snapshot.params['id'];

    this.dbSvc.GetSingleLocker(this.id).subscribe((singleLocker => {
      console.log(singleLocker)
      this.locker = singleLocker
      this.reservatie = this.locker.reservation
    }))

  }

  ionViewEnter(){
    
  }

  ngOnInit() {
  }
}
