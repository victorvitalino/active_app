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
  "<p>Informe seu CPF ou CNPJ e toque em <b>Prosseguir</b>.</p></h4>"

  private typewriter_display: string = "";

  private enable_next_button : boolean = false;

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

  goToHome() {
    this.navCtrl.setRoot('NavigationPage');
  }

}
//
// var aText = new Array(
// "There are only 10 types of people in the world:",
// "Those who understand binary, and those who don't"
// );
// var iSpeed = 100; // time delay of print out
// var iIndex = 0; // start printing array at this posision
// var iArrLength = aText[0].length; // the length of the text array
// var iScrollAt = 20; // start scrolling up at this many lines
//
// var iTextPos = 0; // initialise text position
// var sContents = ''; // initialise contents variable
// var iRow; // initialise current row
//
// function typewriter()
// {
//  sContents =  ' ';
//  iRow = Math.max(0, iIndex-iScrollAt);
//  var destination = document.getElementById("typedtext");
//
//  while ( iRow < iIndex ) {
//   sContents += aText[iRow++] + '<br />';
//  }
//  destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
//  if ( iTextPos++ == iArrLength ) {
//   iTextPos = 0;
//   iIndex++;
//   if ( iIndex != aText.length ) {
//    iArrLength = aText[iIndex].length;
//    setTimeout("typewriter()", 500);
//   }
//  } else {
//   setTimeout("typewriter()", iSpeed);
//  }
// }
//
//
// typewriter();
