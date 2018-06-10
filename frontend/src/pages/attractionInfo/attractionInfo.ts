import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {ImageService} from '../../services/image.service';
import {Attraction} from "../../services/attraction.service";

@Component({
  selector: 'page-attractionInfo',
  templateUrl: 'attractionInfo.html'
})
export class AttractionInfoPage {
  selectedAttraction: Attraction;

  constructor(private imageService: ImageService,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.selectedAttraction = navParams.get('attraction');
  }

  public ngOnInit(): void {
  }

  getImage() : string{
    return this.imageService.getImage(this.selectedAttraction.id_image)
  }
}
