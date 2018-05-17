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
import { TicketPage } from '../pages/ticket/ticket';
import { AttractionPage } from '../pages/attraction/attraction';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ParkPage,
    TicketPage,
    AttractionPage
  ],
  imports: [
    BrowserModule,
		HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ParkPage,
    TicketPage,
    AttractionPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
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
