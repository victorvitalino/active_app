import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-candidate-requirements',
  templateUrl: 'candidate-requirements.html',
})
export class CandidateRequirementsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToDetail(){
    this.navCtrl.push('CandidateRequirementsDetailPage')
  }
  goToNew(){
    this.navCtrl.push('CandidateRequirementsNewPage')
  }
}
