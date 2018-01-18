import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';


@IonicPage()
@Component({
  selector: 'page-stations',
  templateUrl: 'stations.html',
})
export class StationsPage {

  stations: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataServiceProvider) {
    this.data.getStations().subscribe((response) => {
      this.stations = response;
      this.stations = this.stations.data
      console.log(this.stations)
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StationsPage');
  }

  gotoStation(id_station){
    this.navCtrl.push('StationPage',{id_station})
  }
}
