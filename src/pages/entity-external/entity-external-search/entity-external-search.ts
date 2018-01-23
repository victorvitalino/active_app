import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-entity-external-search',
  templateUrl: './show.html',
})
export class EntityExternalSearchPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  getItens(value){
    console.log(value)
  }
}
