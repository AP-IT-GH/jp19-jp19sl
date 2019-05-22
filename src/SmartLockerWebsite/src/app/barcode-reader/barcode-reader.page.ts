import { Component, OnInit } from '@angular/core';
import { BarcodeReaderService } from '../services/barcode-reader.service';

@Component({
  selector: 'app-barcode-reader',
  templateUrl: './barcode-reader.page.html',
  styleUrls: ['./barcode-reader.page.scss'],
})
export class BarcodeReaderPage implements OnInit {
  inputfield: string;
  barcode: string;
  constructor(private barcodeSvc: BarcodeReaderService) { }

  ngOnInit() {
  }

  onKey(event: any) {
    this.inputfield = "";
    this.barcode = event.target.value;
    this.barcodeSvc.studentNummerFilter(this.barcode);
    //console.log(this.barcodeSvc.studentNummerFilter(this.barcode));
    console.log(this.barcodeSvc.studentNummer);
    this.inputfield = "";
  }
}
