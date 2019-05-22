import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BarcodeReaderService } from './barcode-reader.service';

@Injectable({
	providedIn: "root"
})
export class LockerService {
	apiUrl: string = "https://smart-locker-234209.appspot.com/api";

	lockers: ILocker[] = [];

	constructor(private httpSvc: HttpClient, private barcodeSvc: BarcodeReaderService) { }

	GetLockers() {
		this.lockers = [];
		this.httpSvc.get<IReservation[]>(this.apiUrl + "/students/" + this.barcodeSvc.studentNummer + "/reservations")
			.subscribe((data: IReservation[]) => {
				console.log(data);
				data.forEach((reservation: IReservation) => {
					this.lockers.push(reservation.locker)
				});
			});
	}

	OpenLocker(lockerId) {
		console.log("Open locker function")
		this.httpSvc.put(this.apiUrl + "/lockers/" + lockerId, { "open": true })
			.subscribe(data => {
				console.log(data);
			}, error => {
				console.log("Error: " + error);
			});
		this.GetLockers();
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
	locker: ILocker;
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