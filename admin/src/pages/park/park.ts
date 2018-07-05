import {Component} from "@angular/core";
import {Company} from "../../services/company.service";
import {Park, ParkService} from "../../services/park.service";
import {ImageService} from "../../services/image.service";
import {Events, NavController, NavParams} from "ionic-angular";
import {AttractionPage} from "../attraction/attraction";
import {CompanyInfoPage} from "../companyInfo/companyInfo";
import {ParkEditPage} from "../parkEdit/parkEdit";

@Component({
  selector: 'page-park',
  templateUrl: 'park.html'
})
export class ParkPage {
  selectedCompany: Company;
  parks: Park[];

  constructor(private parkService: ParkService,
              private imageService: ImageService,
              public navCtrl: NavController,
              public navParams: NavParams,
              public events:Events) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedCompany = navParams.get('company');
  }

  public ngOnInit(): void {
    // Busca os parques
    this.parkService.getParksOfCompany(this.selectedCompany.id).subscribe((parks: Park[]) => {
      this.parks = parks;
    });
    this.events.subscribe('reloadParks',() => {
      this.parkService.getParksOfCompany(this.selectedCompany.id).subscribe((parks: Park[]) => {
        this.parks = parks;
      });
    });
  }

  getImage(p: Park) : string{
    return this.imageService.getImage(p.image)
  }

  public goTo(park: Park){
    this.navCtrl.push(AttractionPage, {park: park});
  }

  public info(){
    this.navCtrl.push(CompanyInfoPage, {company: this.selectedCompany});
  }

  public createPark(){
    let newPark: Park = {id: "", name: "", company: this.selectedCompany.id, description: "", image: "", location: ""};
    this.navCtrl.push(ParkEditPage, {park: newPark});
  }
}
