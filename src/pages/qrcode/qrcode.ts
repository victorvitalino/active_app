import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BarcodeScanner ,BarcodeScannerOptions } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@IonicPage()
@Component({
  selector: 'page-qrcode',
  templateUrl: './show.html',
})
export class QrcodePage {
  scanData : {};
  encodeData : string ;
  encodedData : {} ;
  options :BarcodeScannerOptions;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public barcodeScanner: BarcodeScanner,
              public appBrowser: InAppBrowser) { }

  scanner() {
    this.options = { prompt : "Faça a leitura do código QR"}
    this.barcodeScanner.scan(this.options).then((barcodeData) => {
    this.scanData = barcodeData;
    this.appBrowser.create(barcodeData.text, '_system');
    }, (err) => { console.log("Error:" + err )});
  }

  
}
