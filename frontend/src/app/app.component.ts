import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TicketPage } from '../pages/ticket/ticket'
import { ParkService, Park } from '../services/park.service';
import { ParkPage } from '../pages/park/park';

@Component({
  templateUrl: 'app.html',
	providers: [ParkService]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

	public parks: Park[];

  pages: Array<Page> = [];

  constructor(private parkService: ParkService,
              public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen) {
    this.initializeApp();
  }

	public ngOnInit(): void {
    this.pages.push({ title: 'perfil', component: HomePage});
    this.pages.push({ title: 'ticket', component: TicketPage});
    this.parkService.getParks().subscribe((parks: Park[]) => { 
      this.parks = parks; 
      parks.forEach(park => this.pages.push({ title: park.name, component: ParkPage}));
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

  page:Page;
  openPark(p) {
    this.page = this.pages.find(page => page.title == p.name);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(this.page.component, {park: p});
  }

  openPage(pageTitle) {
    this.page = this.pages.find(page => page.title == pageTitle);
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(this.page.component);
  }
}
export interface Page {
  title: string, component: any
}