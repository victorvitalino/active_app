import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class WelcomeChatPage {

  private typewriter_text: string = "<br><h1 class='text-center'><b>Olá! Seja bem vindo(a) ao App da CODHAB. :) </h1></b><br>" +
  "<h4><p>Sou seu assistente virtual e te ajudarei a achar o que você precisa.</p>" +
  "<p>Digite sua senha para acessar a área do condidato e clique em Prosseguir</b>.</p></h4>"

  private typewriter_display: string = "";

  private enable_next_button : boolean = false;

  private cpf_cnpj: string;

  private pass: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.cpf_cnpj = this.navParams.get('cpf_cnpj')
    console.log(this.cpf_cnpj)
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

  goToHome() {
    this.navCtrl.setRoot('NavigationPage');
  }

  sign(pass){
    console.log(this.cpf_cnpj + "  " + pass)
    if(this.cpf_cnpj == "018.018.501-27" && pass == "123456"){
      this.navCtrl.setRoot('NavigationPage')
    }else{
      console.log("Sem acesso")
    }
  }

  goToPass() {
    this.navCtrl.push('WelcomePassPage')
  }
}

