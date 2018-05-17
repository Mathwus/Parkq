import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Company } from '../../services/company.service';

@Component({
  selector: 'page-company',
  templateUrl: 'company.html'
})
export class CompanyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
