import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Park} from '../../services/park.service';
import {Attraction, AttractionService} from '../../services/attraction.service';
import {AttractionPage} from '../attraction/attraction'
import {Image, ImageService} from "../../services/image.service";
import {ParkInfoPage} from '../parkInfo/parkInfo';

@Component({
  selector: 'page-park',
  templateUrl: 'park.html'
})
export class ParkPage {
  selectedPark: Park;
  public attractions: Attraction[] = [];
  public images: Image[] = [];

  constructor(private attractionService: AttractionService,
            private imageService: ImageService,
            public navCtrl: NavController,
            public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedPark = navParams.get('park');
  }

  public ngOnInit(): void {
    // Busca os parques
    this.attractionService.getAttractionsOfPark(this.selectedPark.id).subscribe((attractions: Attraction[]) => {
      this.attractions = attractions;
    });
  }

  getAttractionImage(a: Attraction) : string{
    return this.imageService.getImage(a.image)
  }

  openAttraction(a) {
    // Sempre abre a Pagina Park passando como parametro o parque selecionado
    this.navCtrl.push(AttractionPage, {attraction: a});
  }

  openInformation() {
    this.navCtrl.push(ParkInfoPage, {park: this.selectedPark});
  }

}
