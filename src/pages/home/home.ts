import { Component} from '@angular/core';
import {Platform, NavController,MenuController} from 'ionic-angular';
import { QrcodePage } from '../../pages/qrcode/qrcode';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController,
  public menuCtrl: MenuController) {

  }
  gotoNav(param){
    this.navCtrl.push(param);
  }
}
