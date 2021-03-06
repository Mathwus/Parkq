import {ImageService} from "../../services/image.service";
import {Events, NavController, NavParams} from "ionic-angular";
import {Component} from "@angular/core";
import {Attraction, AttractionService} from "../../services/attraction.service";
import {Park} from "../../services/park.service";
import {ParkInfoPage} from "../parkInfo/parkInfo";
import {AttractionInfoPage} from "../attractionInfo/attractionInfo";
import {AttractionEditPage} from "../attractionEdit/attractionEdit";

@Component({
  selector: 'page-attraction',
  templateUrl: 'attraction.html'
})
export class AttractionPage {
  selectedPark: Park;
  attractions: Attraction[];

  constructor(private attractionService: AttractionService,
              private imageService: ImageService,
              public navCtrl: NavController,
              public navParams: NavParams,
              public events:Events) {
    this.selectedPark = navParams.get('park');
  }

  public ngOnInit(): void {
    // Busca as atrações
    this.attractionService.getAttractionsOfPark(this.selectedPark.id).subscribe((attractions: Attraction[]) => {
      this.attractions = attractions;
    });
    this.events.subscribe('reloadAttractions',() => {
      this.attractionService.getAttractionsOfPark(this.selectedPark.id).subscribe((attractions: Attraction[]) => {
        this.attractions = attractions;
      });
    });

  }

  getImage(a: Attraction) : string{
    return this.imageService.getImage(a.image)
  }

  public viewPark(p: Park) {
    this.navCtrl.push(ParkInfoPage, {park: this.selectedPark});
  }

  public viewAttraction(a: Attraction){
    this.navCtrl.push(AttractionInfoPage, {attraction: a});
  }

  public createAttraction(){
    let newAttraction: Attraction = {
      id: "",
      name: "",
      company: this.selectedPark.company,
      park: this.selectedPark.id,
      description: "",
      estimatedtime: 0,
      image:"",
      linesize:1,
      location:""
    };
    this.navCtrl.push(AttractionEditPage, {attraction: newAttraction});
  }
}
