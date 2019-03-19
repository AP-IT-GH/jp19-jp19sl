import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BarcodeReaderService {

  constructor() { }

  studentNummer(unfilterdBarcode:string){
    console.log(unfilterdBarcode);
  }
}
