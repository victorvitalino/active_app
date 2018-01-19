import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';

// ------------------------------------------------
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';

import { DataServiceProvider } from '../providers/data-service/data-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = WelcomePage;

  pages: any;
  showLevel1 = null;
  showLevel2 = null;

  constructor(public platform: Platform,

    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public menuCtrl: MenuController,
    public oneSignal: OneSignal,
    public backgroundGeolocation: BackgroundGeolocation,
    private ga: GoogleAnalytics,
    public dataServiceProvider: DataServiceProvider) {
    this.initializeApp();

    this.ga.startTrackerWithId('UA-96549234-1')
    .then(() => {
      console.log('Google analytics is ready now');
        this.ga.trackView('test');
      // Tracker is ready
      // You can now track pages or set additional information such as AppVersion or UserId
    })
    .catch(e => console.log('Error starting GoogleAnalytics', e));

    // Disparo do provider para pegar os menus
    this.dataServiceProvider.getMenus()
      .subscribe((response)=> {
          this.pages = response;
          console.log(this.pages);
      });

      
      /* === BackgroundGeolocation Aqui, precisando revisar por isso está comentado.
        Para ativa-lo descomente a variável no construtor e os imports na app.component, app.module e providers.

       */
      console.log(this.platform.is)
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
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();


    });
  }

  openPage(page) {
    this.nav.setRoot(HomePage);
  }

  gotoNav(param){
    //Função para navegação do sidebar
    this.nav.push(param);
  }
  getDisplay(display){
    //Função para ativar e desativar menu
    return display
  }
  getColor(color){
    //Função para mudar cor do menu
    return color
  }

// Conjunto de funções do Toggle do Sidebar
  toggleLevel1(idx) {
    if (this.isLevel1Shown(idx)) {
      this.showLevel1 = null;
    } else {
      this.showLevel1 = idx;
    }
  };

  isLevel1Shown(idx) {
    return this.showLevel1 === idx;
  };

  toggleLevel2(idx) {
    if (this.isLevel2Shown(idx)) {
      this.showLevel1 = null;
      this.showLevel2 = null;
    } else {
      this.showLevel1 = idx;
      this.showLevel2 = idx;
    }
  };

  isLevel2Shown(idx) {
    return this.showLevel2 === idx;
  };


}
