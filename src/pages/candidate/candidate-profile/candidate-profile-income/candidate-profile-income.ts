import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CandidateProfileIncomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-candidate-profile-income',
  templateUrl: 'candidate-profile-income.html',
})


export class CandidateProfileIncomePage {
  private typewriter_text: string = "<br><h1 class='text-center'><b>Vamos juntos atualizar sua renda.</h1></b><br>" +
    "<h4><p>É muito simples primeiro informe o valor da sua renda no campo abaixo.</p>" +
    "<h4><p>lembrando que a renda informada deve ser o valor bruto do comprovante de renda ou carteira de trabalho.</p>" +
    "<p>Assim que o fizer clique em Prosseguir</b>.</p></h4>"

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
  goToNew(income){
    this.navCtrl.push('CandidateProfileIncomeNewPage',{income})
  }
}
