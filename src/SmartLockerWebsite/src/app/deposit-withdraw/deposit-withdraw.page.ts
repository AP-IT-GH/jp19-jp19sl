import { Component, OnInit } from '@angular/core';
import { LockerService } from '../services/locker.service';
import { BarcodeReaderService } from '../services/barcode-reader.service';

@Component({
  selector: 'app-deposit-withdraw',
  templateUrl: './deposit-withdraw.page.html',
  styleUrls: ['./deposit-withdraw.page.scss'],
})
export class DepositWithdrawPage implements OnInit {

  constructor(private lockerSvc: LockerService, private barcodeSvc: BarcodeReaderService) {
    this.lockerSvc.GetLockers();
  }

  ngOnInit() {
  }

  OpenLocker(id) {
    this.lockerSvc.OpenLocker(id);
  }
}
