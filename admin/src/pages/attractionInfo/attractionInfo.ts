import {Component} from "@angular/core";
import {Attraction, AttractionService} from "../../services/attraction.service";
import {ImageService} from "../../services/image.service";
import {AttractionEditPage} from "../attractionEdit/attractionEdit";
import {NavController, NavParams} from "ionic-angular";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-attractionInfo',
  templateUrl: 'attractionInfo.html'
})
export class AttractionInfoPage {
  selectedAttraction: Attraction;
  attractions: Attraction[];

  constructor(private imageService: ImageService,
              public navCtrl: NavController,
              public service: AttractionService,
              public navParams: NavParams,
              private alertCtrl: AlertController) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedAttraction = navParams.get('attraction');
  }

  public ngOnInit(): void {

  }

  public edit(){
    this.navCtrl.push(AttractionEditPage, {attraction: this.selectedAttraction});
  }

  getImage() : string{
    return this.imageService.getImage(this.selectedAttraction.image)
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
