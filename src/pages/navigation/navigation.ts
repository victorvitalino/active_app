import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { MyApp } from '../../app/app.component'
/**
 * Generated class for the NavigationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html',
})
export class NavigationPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public myApp: MyApp) {
  }

  goToSchedule() {
    this.navCtrl.push('WelcomePage')
  }
  goToNav(param) {
    this.navCtrl.push(param);
  }
}
