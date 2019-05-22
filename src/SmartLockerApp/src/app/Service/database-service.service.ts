import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  getApiUrl :string = "http://127.0.0.1:3000/api";
  
  constructor(public http: HttpClient) {}

  GetReservations(){
    return this.http.get<IReservation>(`${this.getApiUrl}/reservations`);
  }

  GetStudents(){
    console.log("hios")
    return this.http.get<IStudent>(`${this.getApiUrl}/students`);
  }

  Reserveren(lockerID:string){
    console.log("gereserveerd")
    this.http.put(this.getApiUrl + "/lockers/" + lockerID, { "isReserved": true })
			.subscribe(success => {
				console.log(success);
			}, error => {
				console.log("Error: " + error);
			});
  }

  GetLockers(){
    return this.http.get<ILocker>(`${this.getApiUrl}/lockers`);
  }
}

export interface IStudent {
  _id: string;
  name: string;
  lastName: string;
  student_number: number;
  group: string;
  __v: number;
  created_at: Date;
}

export interface IReservation {
  student: IStudent[];
  _id: string;
  locker: string;
  startDate: Date;
  endDate: Date;
  created_at: Date;
  __v: number;
}

export interface ILocker {
  reservation: IReservation[];
  _id: string;
  open: boolean;
  className: string;
  lockerName: string;
  isReserved: boolean;
  created_at: Date;
  __v: number;
}
