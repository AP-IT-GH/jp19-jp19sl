import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DepositWithdrawPage } from './deposit-withdraw.page';

const routes: Routes = [
  {
    path: '',
    component: DepositWithdrawPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DepositWithdrawPage]
})
export class DepositWithdrawPageModule {}
