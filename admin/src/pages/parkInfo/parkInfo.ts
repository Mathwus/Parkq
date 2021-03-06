import {Component} from "@angular/core";
import {Park, ParkService} from "../../services/park.service";
import {ImageService} from "../../services/image.service";
import {ParkEditPage} from "../parkEdit/parkEdit";
import {NavController, NavParams} from "ionic-angular";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-parkInfo',
  templateUrl: 'parkInfo.html'
})
export class ParkInfoPage {
  selectedPark: Park;
  parks: Park[];

  constructor(private imageService: ImageService,
              public navCtrl: NavController,
              public service: ParkService,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedPark = navParams.get('park');
  }

  public ngOnInit(): void {

  }

  public edit(){
    this.navCtrl.push(ParkEditPage, {park: this.selectedPark});
  }

  getImage() : string{
    return this.imageService.getImage(this.selectedPark.image)
  }

  /*
  public delete(){
    let alert = this.alertCtrl.create({
      title: 'Exclusão',
      message: 'Você tem certeza que deseja apagar o parque?',
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
                *
          }
        }
      ]
    });
    alert.present();

  }
  */

}
