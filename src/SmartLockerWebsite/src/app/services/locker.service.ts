import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { BarcodeReaderService } from './barcode-reader.service';

@Injectable({
	providedIn: "root"
})
export class LockerService {
	apiUrl: string = "http://localhost:3000/api";

	lockers: ILocker;

	constructor(private httpSvc: HttpClient, private barcodeSvc: BarcodeReaderService) { }

	GetStudents() {
		this.httpSvc.get(this.apiUrl + "/students/" + this.barcodeSvc.studentNummer)
			.subscribe(success => {
				console.log(success);
			});
	}

	GetLockers() {
		this.httpSvc.get<ILocker>(this.apiUrl + "/lockers")
			.subscribe(success => {
				this.lockers = success;
				console.log(success);
			});
	}

	OpenLocker(lockerId) {
		console.log("Open locker function")
		this.httpSvc.put(this.apiUrl + "/lockers/" + lockerId, { "open": true })
			.subscribe(success => {
				console.log(success);
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