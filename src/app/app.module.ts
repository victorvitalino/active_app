/* Native Modules */
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

/* Pages */
import { MyApp } from './app.component';

/* Plugins */
import { MaterialIconsModule } from 'ionic2-material-icons';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { OneSignal } from '@ionic-native/onesignal';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { LaunchNavigator } from '@ionic-native/launch-navigator';
import { BackgroundGeolocation, BackgroundGeolocationConfig, BackgroundGeolocationResponse } from '@ionic-native/background-geolocation';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { Camera } from '@ionic-native/camera';
import { GoogleAnalytics } from '@ionic-native/google-analytics';
/* Services / Providers */
import { DataServiceProvider } from '../providers/data-service/data-service';

/* Page Modules */
import { NavigationPageModule } from '../pages/navigation/navigation.module';
import { WelcomePageModule } from '../pages/welcome/welcome.module';

/* Providers */
import { HabitationProvider } from '../providers/habitation/habitation';

@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    MaterialIconsModule,
    IonicModule.forRoot(MyApp),
    WelcomePageModule,
    NavigationPageModule,
  ],
  bootstrap: [IonicApp],
  providers: [
    StatusBar,
    SplashScreen,
    OneSignal,
    BarcodeScanner,
    LaunchNavigator,
    BackgroundGeolocation,
    InAppBrowser,
    FileTransfer,
    FileTransferObject,
    File,
    Camera,
    GoogleAnalytics,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataServiceProvider,
    HabitationProvider,
  ]
})
export class AppModule {}
