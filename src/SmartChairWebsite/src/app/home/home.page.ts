import { Component, OnInit } from '@angular/core';
import { BarcodeReaderService } from '../services/barcode-reader.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  inputfield;
  barcode: string;
  constructor(private barcodeSvc:BarcodeReaderService) {}

  ngOnInit(){}

  onKey(event: any) {
    this.barcode = event.target.value;
    console.log(this.barcodeSvc.studentNummer(this.barcode));
    this.inputfield = "";
  }
}
