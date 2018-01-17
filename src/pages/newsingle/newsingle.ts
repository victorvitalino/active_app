import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@IonicPage()
@Component({
  selector: 'page-newsingle',
  templateUrl: 'newsingle.html',
})
export class NewsinglePage {
  newsingle: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataServiceProvider) {

    this.data.getNewSingle(this.navParams.get('new_id'))
    .subscribe((response) => {
      this.newsingle = response;
      this.newsingle = Array.of(this.newsingle)
      console.log(this.newsingle);
  
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewsinglePage');
  }


}
