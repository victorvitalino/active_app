import { Component} from '@angular/core';
import {Platform, NavController,MenuController} from 'ionic-angular';
import { InAppBrowser, InAppBrowserOptions } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  options: InAppBrowserOptions = {
  };
  constructor(public navCtrl: NavController,
  public menuCtrl: MenuController,
  public iab: InAppBrowser
  ) {

  }
  gotoNav(param){
    this.navCtrl.push(param);
  }

  openWithSystemBrowser(url: string) {
    let target = "_system";
    this.iab.create(url, target, this.options);
  }
}
