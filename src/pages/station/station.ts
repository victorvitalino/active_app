import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';

@IonicPage()
@Component({
  selector: 'page-station',
  templateUrl: 'station.html',
})
export class StationPage {
station: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataServiceProvider) {
    
    this.data.getStation(this.navParams.get('id_station'))
      .subscribe((response) => {
        this.station = response;
        this.station = Array.of(this.station)
        console.log(this.station);

      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StationPage');
  }

}
