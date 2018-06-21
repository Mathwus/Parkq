import {Component} from "@angular/core";
import {Park} from "../../services/park.service";
import {ImageService} from "../../services/image.service";
import {NavController, NavParams} from "ionic-angular";

@Component({
  selector: 'page-parkInfo',
  templateUrl: 'parkInfo.html'
})
export class ParkInfoPage {
  selectedPark: Park;
  parks: Park[];

  constructor(private imageService: ImageService,
              public navCtrl: NavController,
              public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedPark = navParams.get('park');
  }

  public ngOnInit(): void {

  }

  getImage() : string{
    return this.imageService.getImage(this.selectedPark.id_image)
  }

}
