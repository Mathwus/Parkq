import {Component} from "@angular/core";
import {Events, NavController, NavParams} from "ionic-angular";
import {Company, CompanyService} from "../../services/company.service";;

@Component({
  selector: 'page-companyEdit',
  templateUrl: 'companyEdit.html'
})
export class CompanyEditPage {
  selectedCompany: Company;
  orignCompany: Company;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public service: CompanyService,
              public events:Events) {
    // If we navigated to this page, we will have an item available as a nav param

    this.orignCompany = navParams.get('company');
    this.selectedCompany = { id :this.orignCompany.id, name: this.orignCompany.name, cnpj: this.orignCompany.cnpj, description: this.orignCompany.description };
  }

  public ngOnInit(): void {

  }

  public save(){
    this.orignCompany.name = this.selectedCompany.name;
    this.orignCompany.cnpj = this.selectedCompany.cnpj;
    this.orignCompany.description = this.selectedCompany.description;
    this.service.postCompany(this.orignCompany)
      .subscribe({
        complete : () => {
          this.events.publish('reloadCompanies');
          this.navCtrl.pop()
        }
        , error: err => console.log(err)})

  }

  public getTypeOperation() : string {
    if(this.selectedCompany.id == "")
      return "Criação";
    else return "Alteracao";
  }
}
