import {Component} from "@angular/core";
import {Events, NavController, NavParams} from "ionic-angular";
import {Company, CompanyService} from "../../services/company.service";
import {CompanyEditPage} from "../companyEdit/companyEdit";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-companyInfo',
  templateUrl: 'companyInfo.html'
})
export class CompanyInfoPage {
  selectedCompany: Company;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service: CompanyService,
              public events:Events,
              private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedCompany = navParams.get('company');
  }

  public ngOnInit(): void {

  }

  public edit(){
    this.navCtrl.push(CompanyEditPage, {company: this.selectedCompany});
  }

  public delete(){
    let alert = this.alertCtrl.create({
      title: 'Exclusão',
      message: 'Você tem certeza que deseja apagar a a compania todos os dados referente a ela serão apagados juntos?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
          }
        },
        {
          text: 'Excluir',
          handler: () => {
            this.service.delete(this.selectedCompany);
              /*
              .subscribe({
                complete : () => {
                  this.events.publish('reloadCompanies');
                  this.navCtrl.pop()
                }
                , error: err => console.log(err)});
                */
          }
        }
      ]
    });
    alert.present();

  }

}
