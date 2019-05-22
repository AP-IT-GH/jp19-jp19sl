import { Component, OnInit } from "@angular/core";
import { BarcodeReaderService } from "../services/barcode-reader.service";
import { LockerService } from '../services/locker.service';

@Component({
	selector: "app-home",
	templateUrl: "home.page.html",
	styleUrls: ["home.page.scss"]
})
export class HomePage implements OnInit {
	constructor(private barcodeSvc: BarcodeReaderService, private lockerSvc: LockerService) { }

	ngOnInit() {

	}
}
