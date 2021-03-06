import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-candidate-notifications',
  templateUrl: 'candidate-notifications.html',
})
export class CandidateNotificationsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToDetail() {
    this.navCtrl.push('CandidateNotificationsDetailPage')
  }

}
