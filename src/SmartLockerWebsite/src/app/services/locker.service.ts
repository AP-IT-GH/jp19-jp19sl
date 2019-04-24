import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
	providedIn: "root"
})
export class LockerService {
	constructor(private httpSvc: HttpClient) { }

	GetLockerState() { }
	// PUT localhost:3000/api/lockers/<id>
	SetLockerState(id: string, state: boolean) {
		this.httpSvc
			.put("localhost:3000/api/Lockers/" + id, {
				open: state
			})
			.subscribe(res => console.log(res)
				, err => console.error(err)
			);
	}
}
