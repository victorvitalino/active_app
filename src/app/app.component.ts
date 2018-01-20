import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

import { WelcomePage } from '../pages/welcome/welcome';
import { QrCodePage } from '../pages/qrcode/qrcode';

import { DataServiceProvider } from '../providers/data-service/data-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  habitationNav     : boolean = false;
  regularizationNav : boolean = false;
  entityNav         : boolean = false;
  portalNav         : boolean = false;
  cadastreNav       : boolean = false;
  serviceNav        : boolean = false;

  constructor(public platform: Platform,
              public statusBar: StatusBar,
              public splashScreen: SplashScreen,
              public menuCtrl: MenuController,
              public oneSignal: OneSignal,
              public backgroundGeolocation: BackgroundGeolocation,
              private ga: GoogleAnalytics,
              public dataServiceProvider: DataServiceProvider) {

    this.initializeApp();

    this.ga.startTrackerWithId('UA-96549234-1').then(() => {
      this.ga.trackView('test');
    }).catch(e => console.log('Error starting GoogleAnalytics', e));

    if (this.platform.is('cordova')){
      const config: BackgroundGeolocationConfig = {
                  desiredAccuracy: 10,
                  stationaryRadius: 20,
                  distanceFilter: 30,
                  debug: true, //  enable this hear sounds for background-geolocation life-cycle.
                  notificationTitle: 'CODHAB',
                  notificationText: 'ativo',
                  stopOnTerminate: false,
                  saveBatteryOnBackground: true,
                  startOnBoot: false,
                  stopOnStillActivity: false,
                  notificationIconLarge: 'icon',
                  notificationIconSmall: 'icon' // enable this to clear background location settings when the app terminates
          };

        this.backgroundGeolocation.configure(config)
          .subscribe((location: BackgroundGeolocationResponse) => {

            console.log(location);

            // IMPORTANT:  You must execute the finish method here to inform the native plugin that you're finished,
            // and the background-task may be completed.  You must do this regardless if your HTTP request is successful or not.
            // IF YOU DON'T, ios will CRASH YOUR APP for spending too much time in the background.
            this.backgroundGeolocation.finish(); // FOR IOS ONLY

          });
      //
      // // start recording location
      this.backgroundGeolocation.start();
      // //
      // // // If you wish to turn OFF background-tracking, call the #stop method.
      // // this.backgroundGeolocation.stop();
    }



    platform.ready().then(() => {

      // ebef79f2-9b94-4c8b-ad48-d7e4b304b2cc  chave teste onesingal
      this.oneSignal.startInit("f8691fb0-e0c9-4d6a-b927-c795b65727c5", "190801927723");
      // this.oneSignal.startInit("ebef79f2-9b94-4c8b-ad48-d7e4b304b2cc", "598492556194");

      //Aqui é caso vc queria que o push apareça mesmo com o APP aberto
      this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);

      //Aqui você vai tratar o recebimento do push notification com todos os dados
      this.oneSignal.handleNotificationOpened().subscribe(data => {

        console.log("Dados do Push", data);

      });

      this.oneSignal.endInit();
    });


  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  goToNavigationHome() {
    this.nav.setRoot('NavigationPage')
  }

  // Controles Sidebar

  openHabitationNav(reset = false) {
    this.resetNav('habitationNav', this.habitationNav);
    this.habitationNav = (reset == true) ? false : this.habitationNav
    this.habitationNav = (this.habitationNav == true) ? false : true
  }

  openRegularizationNav(reset = false) {
    this.resetNav('regularizationNav', this.regularizationNav);
    this.regularizationNav = (reset == true) ? false : this.regularizationNav
    this.regularizationNav = (this.regularizationNav == true) ? false : true
  }

  openEntityNav(reset = false) {
    this.resetNav('entityNav', this.entityNav);
    this.entityNav = (reset == true) ? false : this.entityNav
    this.entityNav = (this.entityNav == true) ? false : true
  }

  openPortalNav(reset = false) {
    this.resetNav('portalNav', this.portalNav);
    this.portalNav = (reset == true) ? false : this.portalNav
    this.portalNav = (this.portalNav == true) ? false : true
  }

  openCadastreNav(reset = false) {
    this.resetNav('cadastreNav', this.cadastreNav);
    this.cadastreNav = (reset == true) ? false : this.cadastreNav
    this.cadastreNav = (this.cadastreNav == true) ? false : true
  }

  openServiceNav(reset = false) {
    this.resetNav('serviceNav', this.serviceNav);
    this.serviceNav = (reset == true) ? false : this.serviceNav
    this.serviceNav = (this.serviceNav == true) ? false : true
  }

  resetNav(exemption_nav, value) {
    this.habitationNav = false
    this.regularizationNav = false
    this.habitationNav = false
    this.regularizationNav  = false
    this.entityNav = false
    this.portalNav = false
    this.cadastreNav = false

    this[exemption_nav] = value
  }
}
