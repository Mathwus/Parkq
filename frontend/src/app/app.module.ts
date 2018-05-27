import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Http, HttpModule, RequestOptions, XHRBackend} from "@angular/http";
import {interceptHttpFactory, InterceptHttpService} from "../providers/http/intercept-http.service";
import { ParkPage } from '../pages/park/park';
import { AttractionPage } from '../pages/attraction/attraction';
import {ImageService} from "../services/image.service";
import { CompanyPage } from '../pages/company/company';
import { ParkInfoPage } from '../pages/parkInfo/parkInfo';
import { AttractionService } from '../services/attraction.service';
import { QRCodeModule } from 'angular2-qrcode';
import {AttractionInfoPage} from "../pages/attractionInfo/attractionInfo";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ParkPage,
    AttractionPage,
    CompanyPage,
    ParkInfoPage,
    AttractionInfoPage
  ],
  imports: [
    BrowserModule,
		HttpModule,
    QRCodeModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ParkPage,
    AttractionPage,
    CompanyPage,
    ParkInfoPage,
    AttractionInfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImageService,
    AttractionService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
		{
			provide: LocationStrategy,
			useClass: HashLocationStrategy
		},
		{
			provide: Http,
			useClass: InterceptHttpService,
			deps: [XHRBackend, RequestOptions],
			useFactory: interceptHttpFactory
		},
  ]
})
export class AppModule {}
