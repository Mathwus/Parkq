import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {CompanyService} from "../services/company.service";
import { HttpClientModule } from '@angular/common/http';
import {ImageService} from "../services/image.service";
import {ParkService} from "../services/park.service";
import {ParkPage} from "../pages/park/park";
import {AttractionPage} from "../pages/attraction/attraction";
import {AttractionService} from "../services/attraction.service";
import {CompanyInfoPage} from "../pages/companyInfo/companyInfo";
import {CompanyEditPage} from "../pages/companyEdit/companyEdit";
import {ParkInfoPage} from "../pages/parkInfo/parkInfo";
import {ParkEditPage} from "../pages/parkEdit/parkEdit";
import {AttractionInfoPage} from "../pages/attractionInfo/attractionInfo";
import {AttractionEditPage} from "../pages/attractionEdit/attractionEdit";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ParkPage,
    AttractionPage,
    CompanyInfoPage,
    CompanyEditPage,
    ParkInfoPage,
    ParkEditPage,
    AttractionInfoPage,
    AttractionEditPage,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ParkPage,
    AttractionPage,
    CompanyInfoPage,
    CompanyEditPage,
    ParkInfoPage,
    ParkEditPage,
    AttractionInfoPage,
    AttractionEditPage,
  ],
  providers: [
    StatusBar,
    CompanyService,
    ImageService,
    ParkService,
    AttractionService,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
