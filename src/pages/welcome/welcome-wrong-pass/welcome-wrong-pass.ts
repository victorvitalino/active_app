import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-welcome-wrong-pass',
  templateUrl: 'welcome-wrong-pass.html',
})
export class WelcomeWrongPassPage {
  private cpf_cnpj: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cpf_cnpj = this.navParams.get('cpf_cnpj')
    console.log(this.cpf_cnpj)
  }

  sign(pass) {
    console.log(this.cpf_cnpj + "  " + pass)
    if (this.cpf_cnpj == "018.018.501-27" && pass == "123456") {
      this.navCtrl.setRoot('NavigationPage')
    } else {
      let cpf_cnpj = this.cpf_cnpj
      this.navCtrl.push('WelcomeWrongPassPage', { cpf_cnpj })
    }
  }
  goToPass(){
    this.navCtrl.push('WelcomePassPage')  
  }
}
