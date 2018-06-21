import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Company, CompanyService} from "../../services/company.service";
import {ParkPage} from "../park/park";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public companies: Company[] = [];

  constructor(public navCtrl: NavController,
              public companyService: CompanyService) {

  }

  public ngOnInit(): void {
    this.companyService.getCompanies().subscribe((companies: Company[]) => {
      this.companies = companies;
    });
  }

  public goTo(company: Company){
    this.navCtrl.push(ParkPage, {company: company});
  }

}
