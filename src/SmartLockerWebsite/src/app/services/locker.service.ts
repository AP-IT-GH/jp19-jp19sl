import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class LockerService {
	apiUrl: string = "http://localhost:3000/api";

	constructor(private httpSvc: HttpClient) { }

	GetStudents() {
		this.httpSvc.get(this.apiUrl + "/students").subscribe(success => {
			console.log(success);
		})
	}
}

interface Locker {
	open: boolean,
	users: string[],
	lockerName: string,
	lokaal: string
}