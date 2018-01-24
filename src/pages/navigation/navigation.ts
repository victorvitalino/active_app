import { Component} from '@angular/core';
import { IonicPage, NavController, NavParams  } from 'ionic-angular';
import { MyApp } from '../../app/app.component'
import { LoginServiceProvider } from '../../providers/login-service/login-service';
import { Geolocation } from '@ionic-native/geolocation';
 
@IonicPage()
@Component({
  selector: 'page-navigation',
  templateUrl: 'navigation.html'
})
export class NavigationPage {

  latitude: number ;
  longitude: number ;

  constructor(public navCtrl: NavController, public navParams: NavParams
    , public myApp: MyApp, public service:LoginServiceProvider, public geolocation:Geolocation) {

    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude)
      console.log(this.longitude)
    }).catch((error) => {
      console.log('Error getting location', error);
    });
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
      console.log(this.latitude)
      console.log(this.longitude)
    }).catch((error) => {
      console.log('Error getting location', error);
    });
    console.log(this.latitude)
    console.log(this.longitude)
    this.insert_data('01801850127',this.latitude,this.longitude);
    this.service.getData()
  }

  insert_data(cpf,latitude,longitude){
    this.service.insertData(cpf,latitude,longitude)
  }
  
  goToSchedule() {
    this.navCtrl.push('WelcomePage')
  }

  goToQrCode() {
    this.navCtrl.push('QrcodePage')
  }

  goToSearch() {
    this.navCtrl.push('HabitationSearchPage')
  }
  goToChat() {
    this.navCtrl.push('CandidateChatPage')
  }
  
}
