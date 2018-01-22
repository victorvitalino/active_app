import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-welcome-pass',
  templateUrl: 'welcome-pass.html',
})
export class WelcomePassPage {

  private typewriter_text: string = "<h4><p>Sua senha está desatuaizada, informe uma nova senha com 6 números</p>" +
    "<p>Logo depois repita a mesma senha.</b>.</p></h4>"

  private typewriter_display: string = "";

  private enable_next_button: boolean = false;

  private cpf_cnpj: string;

  private pass: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.typingCallback(this);
  }

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 40, that);
    } else {
      that.enable_next_button = true;
    }
  }

  check_pass(pass){
    if (!pass) {
      return '';
    }
    if(pass.length == 6){
      return true
    }
    console.log(pass.length)
    console.log(pass)
  }
  new_pass(pass,check_pass){
    if (pass == check_pass) {
      this.navCtrl.setRoot('NavigationPage')
    } else {
      console.log("Senhas não iguais")
    }
  }
  goToWelcome(){
    this.navCtrl.push('WelcomePage')
  }

}
