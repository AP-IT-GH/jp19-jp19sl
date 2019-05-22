import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  //ApiUrl :string = "https://smart-locker-234209.appspot.com/api";
  
  //lokaal
  ApiUrl:string = "http://localhost:3000/api";

  constructor(public http: HttpClient) {}

  GetReservations(){
    return this.http.get<IReservation>(`${this.ApiUrl}/reservations`);
  }

  GetStudents(){
    console.log("hios")
    return this.http.get<IStudent>(`${this.ApiUrl}/students`);
  }

  Reserveren(reservation:IReservation){
    console.log("gereserveerd")
    this.http.post(this.ApiUrl + "/reservations", reservation).subscribe();
  


/*     this.http.put(this.getApiUrl + "/lockers/" + lockerID, { "isReserved": true })
			.subscribe(success => {
				console.log(success);
			}, error => {
				console.log("Error: " + error);
			}); */
  }

  GetLockers(){
    return this.http.get<ILocker>(`${this.ApiUrl}/lockers`);
  }

  GetSingleLocker(id:string){
    return this.http.get<ILocker>(`${this.ApiUrl}/lockers/${id}`);
  }
}

export interface IStudent {
  _id?: string;
  name: string;
  lastName: string;
  student_number: number;
  group: string;
  created_at: Date;
}

export interface IReservation {
  /* student: IStudent[]; */
  student: string[]
  _id?: string;
  locker: ILocker;
  startDate: Date;
  endDate: Date;
  created_at?: Date;
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
