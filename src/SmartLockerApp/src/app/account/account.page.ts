import { Component, OnInit } from '@angular/core';
import { IStudent, DatabaseService, IReservation } from '../Service/database-service.service';


@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {

  students: IStudent;
  reservation: IReservation;
  FilterArray: IStudent[];

  constructor(public databaseservice: DatabaseService){
    console.log("opgestart")
    this.databaseservice.GetStudents().subscribe(student =>{
      console.log(student)
      this.students = student

    },err => console.log(err.message))

    this.databaseservice.GetReservations().subscribe(reserv =>{
      console.log(reserv)
      this.reservation = reserv
    })
  }

  ngOnInit() {

  }
}
