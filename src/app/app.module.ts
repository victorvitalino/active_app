import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { HabitacaoPage } from '../pages/habitacao/habitacao';
import { LoginPage } from '../pages/login/login';
import { QrcodePage } from '../pages/qrcode/qrcode';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { DataServiceProvider } from '../providers/data-service/data-service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    HabitacaoPage,
    LoginPage,
    QrcodePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    HabitacaoPage,
    LoginPage,
    QrcodePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    BarcodeScanner,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider
  ]
})
export class AppModule {}
