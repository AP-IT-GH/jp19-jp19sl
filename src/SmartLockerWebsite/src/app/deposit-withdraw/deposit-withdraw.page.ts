import { Component, OnInit } from '@angular/core';
import { LockerService } from '../services/locker.service';

@Component({
  selector: 'app-deposit-withdraw',
  templateUrl: './deposit-withdraw.page.html',
  styleUrls: ['./deposit-withdraw.page.scss'],
})
export class DepositWithdrawPage implements OnInit {

  constructor(private lockerSvc: LockerService) { }

  ngOnInit() {
  }

}
