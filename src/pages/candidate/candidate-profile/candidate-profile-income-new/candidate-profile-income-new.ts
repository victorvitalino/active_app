import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events, Content, TextInput } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-candidate-profile-income-new',
  templateUrl: 'candidate-profile-income-new.html',
})
export class CandidateProfileIncomeNewPage {

  private typewriter_text: string = "<br><h1 class='text-center'><b>Você informou que sua renda é R$2.000,00 , agora precisamos do seu comprovante</h1></b><br>" +
    "<h4><p>Vamos agora incluir os documentos necessários...</p>" +
    "<h4><p> tenha mãos um documento que comprove sua renda como contracheque, declaração de comprovante de renda, etc..</p>" +
    // "<h4><p>  -Servidor Público: Declaração funcional e o último contracheque;</p>" +
    // "<h4><p>  -Autônomo informal: Declaração em formulário próprio, fornecido pela CODHAB, declaração de comprovação de renda emitida pelo sindicato -de classe, cooperativa ou associação, DECORE – Declaração de Comprovação de Percepção de Rendimentos emitida por profissional competente, obedecida à legislação pertinente ou Declaração do IRPF (com recibo de entrega);</p>" +
    // "<h4><p>  -Condutor autônomo de veículo: Declaração sindicato com vínculo há pelo menos 1 (um) ano e registro do veículo;</p>" +
    // "<h4><p>  -Comerciante: Contrato individual ou social da firma registrado e pró-labore declarado pelo contador;</p>" +
    // "<h4><p>  -Autônomo/profissional liberal: Comprovante de recolhimento do INSS, declaração de IR, contrato de prestação de serviço com guia RPA;</p>" +
    // "<h4><p>  -Outros assalariados: Cópia de identificação e das folhas próprias da carteira de trabalho; Último contracheque de pagamento, contendo o carimbo e CNPJ do empregador ou Contrato de Trabalho regido pela legislação pertinente.</p>" +
    "<p>* Vamos lá?</b></p></h4>"

  private typewriter_display: string = "";

  private enable_next_button: boolean = false;

  private income : string;
  @ViewChild(Content) content: Content;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit() {
    this.typingCallback(this);
  }
  onFocus() {
    this.content.resize();
    this.scrollToBottom();
  }
  scrollToBottom() {
    setTimeout(() => {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400)
  }

  typingCallback(that) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      // this.scrollToBottom();
      setTimeout(that.typingCallback, 40, that);
    } else {
      that.enable_next_button = true;
    }
  }
  goToUpload() {
    this.navCtrl.push('CandidateProfileIncomeUploadPage')
  }
  

}
