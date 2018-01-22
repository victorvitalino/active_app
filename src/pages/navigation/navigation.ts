import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { MyApp } from '../../app/app.component'


@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html'
})
export class NavigationPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public myApp: MyApp) {
  }

  goToSchedule() {
    this.navCtrl.push('WelcomePage')
  }

  goToQrCode() {
    this.navCtrl.push('QrcodePage')
  }

  goToSearch() {
    this.navCtrl.push('HabitationSearchPage')
  }
  goToChat() {
    this.navCtrl.push('CandidateChatPage')
  }
}
