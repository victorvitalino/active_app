import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-welcome-no-user',
  templateUrl: 'welcome-no-user.html',
})

export class WelcomeNoUserPage {
  private typewriter_text: string = "<h4><p>Olá!!! Não identifiquei seu CPF nos cadastros da CODHAB. Estou direcionando você para saber mais sobre a CODHAB e Programa Habitacionais de Interesse Social.</p>" +
    "<p>  Você quer saber sobre: Habita Brasília, Regularização, Entidades, Assistência Técnica ou Validação de Documentos?</p></h4>"

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
    }}
}
