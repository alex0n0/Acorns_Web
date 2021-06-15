import { Component, OnInit } from '@angular/core';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scanner-screen',
  templateUrl: './scanner-screen.component.html',
  styleUrls: ['./scanner-screen.component.scss']
})
export class ScannerScreenComponent implements OnInit {

  allowedFormats = [ BarcodeFormat.QR_CODE, BarcodeFormat.EAN_13 ];

  constructor() { }

  ngOnInit(): void {
  }

  scanSuccessHandler = (e:any) => {
    console.log(e);
  }
  scanErrorHandler = (e:any) => {
    console.log(e);
  }
  scanFailureHandler = (e:any) => {
    console.log(e);
  }
  scanCompleteHandler = (e:any) => {
    console.log(e);
  }

}
