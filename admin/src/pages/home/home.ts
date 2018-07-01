import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Company, CompanyService} from "../../services/company.service";
import {ParkPage} from "../park/park";
import {CompanyEditPage} from "../companyEdit/companyEdit";
import { Events } from 'ionic-angular'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public companies: Company[] = [];

  constructor(public navCtrl: NavController,
              public companyService: CompanyService,
              public events:Events) {
  }

  public ngOnInit(): void {
    this.companyService.getCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
    this.events.subscribe('reloadCompanies',() => {
      this.companyService.getCompanies().subscribe((companies: Company[]) => {
        this.companies = companies;
      });
    });
  }

  public goTo(company: Company){
    this.navCtrl.push(ParkPage, {company: company});
  }

  public createCompany(){
    let company : Company = { id: "", name : "", cnpj:"", description : ""};
    this.navCtrl.push(CompanyEditPage, {company: company});
  }

}
