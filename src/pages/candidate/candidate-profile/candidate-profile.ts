import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-candidate-profile',
  templateUrl: 'candidate-profile.html',
})
export class CandidateProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  goToCadastre(){
    this.navCtrl.push('CandidateProfileCadastrePage')
  }
}
