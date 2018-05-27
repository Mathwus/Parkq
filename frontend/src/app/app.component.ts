import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ParkService, Park } from '../services/park.service';
import { ParkPage } from '../pages/park/park';
import { AttractionPage } from '../pages/attraction/attraction';
import { CompanyPage } from '../pages/company/company';
import { ParkInfoPage } from '../pages/parkInfo/parkInfo';

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
    this.pages.push({ title: 'home', component: HomePage});
    this.pages.push({ title: 'perfil', component: HomePage});
    this.pages.push({ title: 'attraction', component: AttractionPage});
    this.pages.push({ title: 'company', component: CompanyPage});
    this.pages.push({ title: 'parkInfo', component: ParkInfoPage});
    // Busca os parques
    this.parkService.getParks().subscribe((parks: Park[]) => {
      this.parks = parks;
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

  openPark(p) {
    // Sempre abre a Pagina Park passando como parametro o parque selecionado
    this.nav.push(ParkPage, {park: p});
  }

  openAttraction(a) {
    this.nav.push(AttractionPage, {attraction: a});
  }

  page:Page;
  openPage(pageTitle) {
    this.page = this.pages.find(page => page.title == pageTitle);
    // Abre a pagina Passada como parametro
    this.nav.push(this.page.component);
  }

  goHome(){
    this.nav.setRoot(HomePage);
  }

}

export interface Page {
  title: string, component: any
}
