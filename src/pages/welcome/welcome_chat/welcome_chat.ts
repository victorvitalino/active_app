import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MyApp } from '../../../app/app.component';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class WelcomeChatPage {

  private typewriter_text: string = "<br><h1 class='text-center'><b>Olá! Seja bem vindo(a) ao App da CODHAB. :) </h1></b><br>" +
  "<h4><p>identifiquei que você já possui cadastro na CODHAB.</p>" +
  "<p>Digite sua senha para acessar a área do condidato e clique em Próximo.</p></h4>"

  private typewriter_display: string = "";

  private enable_next_button : boolean = false;
  cpf_cnpj: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public myApp:MyApp) {
    
  }

  ngOnInit() {
    this.cpf_cnpj = this.navParams.get('cpf_cnpj');
    console.log(this.cpf_cnpj);
    this.myApp.typingCallback(this);
  }



  goToHome() {
    this.navCtrl.setRoot('NavigationPage');
  }

}
