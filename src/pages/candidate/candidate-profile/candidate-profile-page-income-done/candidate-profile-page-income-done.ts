import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-candidate-profile-page-income-done',
  templateUrl: 'candidate-profile-page-income-done.html',
})
export class CandidateProfilePageIncomeDonePage {
  private typewriter_text: string = "<br><h1 class='text-center'><b>Parabéns você atualizou sua renda</h1></b><br>" +
    "<h4><p>Viu como foi simples?</p>" +
    "<h4><p>Agora é com a gente... Nossos atendentes validarão os documentos enviados...</p>" +
    "<h4><p>Fique atento(a) às notificações do aplicativo, pois caso haja necessidade nossos atendentes entrarão em contato por meio do aplicativo...</p>" +
    "<p>Até mais!!!</b>.</p></h4>"

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
  goToMain(){
    this.navCtrl.push("NavigationPage")
  }
}
