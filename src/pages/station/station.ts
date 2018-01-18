import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataServiceProvider } from '../../providers/data-service/data-service';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator';

@IonicPage()
@Component({
  selector: 'page-station',
  templateUrl: 'station.html',
})
export class StationPage {
station: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public data:DataServiceProvider,public LauchNavigator:LaunchNavigator) {
    
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

  makeCall(phonenumber){
    var call = "tel:" + phonenumber ;
    document.location.href = call
  }

  writeMail(email){
    var trigger = "mailto:" + email;
    document.location.href = trigger;
  }
  goNavigate(lat, lon){
     this.LauchNavigator.navigate([lat, lon])
  }
}
