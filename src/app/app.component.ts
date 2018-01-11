import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
// ------------------------------------------------
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HabitacaoPage } from '../pages/habitacao/habitacao';
import { LoginPage } from '../pages/login/login';
import { QrcodePage } from '../pages/qrcode/qrcode';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, public oneSignal: OneSignal) {
    this.initializeApp();

    // used for an example of ngFor and navigation

    // ebef79f2-9b94-4c8b-ad48-d7e4b304b2cc  chave teste onesingal
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Habitação', component: HabitacaoPage },
      { title: 'Login', component: LoginPage },
      { title: 'Qrcode', component: QrcodePage }

      // { title: 'List', component: ListPage },
      // { title: 'List2', component: ListPage },
    ];


    platform.ready().then(() => {

      //Aqui vocë coloca os dados que coletamos no passo 12 e 7
      this.oneSignal.startInit("f8691fb0-e0c9-4d6a-b927-c795b65727c5", "190801927723");
      // this.oneSignal.startInit("ebef79f2-9b94-4c8b-ad48-d7e4b304b2cc", "598492556194");

      //Aqui é caso vocë queria que o push apareça mesmo com o APP aberto
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
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  gotoQr(param){
    console.log(param)
    this.nav.setRoot(param);
  }
}
