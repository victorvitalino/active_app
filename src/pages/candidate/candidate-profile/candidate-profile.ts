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
    this.navCtrl.push('CandidateProfileCadastrePage');
  }
  goToDependents(){
    this.navCtrl.push('CandidateProfileDependentsPage');
  }
  goToAddress(){
    this.navCtrl.push('CandidateProfileAddressVinculationPage');
  }
  goToDocuments(){
    this.navCtrl.push('CandidateProfileDocumentsPage');
  }
  goToEntity(){
    this.navCtrl.push('CandidateProfileEntityPage');
  }
  goToIndication(){
    this.navCtrl.push('CandidateProfileIndicationPage');
  }
  goToIptu(){
    this.navCtrl.push('CandidateProfileIptuPage');
  }
  goToPontuation(){
    this.navCtrl.push('CandidateProfilePontuationPage');
  }
  goToSituation(){
    this.navCtrl.push('CandidateProfileSituationPage');
  }
  goToRequirements(){
    this.navCtrl.push('CandidateProfileRequirementsPage');
  }
  goToSchedules(){
    this.navCtrl.push('CandidateProfileSchedulesPage');
  }
  goToUpdates(){
    this.navCtrl.push('CandidateProfileUpdatesPage');
  }
}
