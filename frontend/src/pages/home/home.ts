import {Component, ViewChild} from '@angular/core';
import {Nav, NavController} from 'ionic-angular';
import {Park, ParkService} from "../../services/park.service";
import {ParkPage} from "../park/park";
import {Image, ImageService} from "../../services/image.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public parks: Park[] = [];
  public images: Image[] = [];

  constructor(private parkService: ParkService,
              private imageService: ImageService,
              public navCtrl: NavController) {

  }

  public ngOnInit(): void {
    // Busca os parques
    this.parkService.getParks().subscribe((parks: Park[]) => {
      this.parks = parks;
      parks.forEach(p =>
        this.imageService.getImage(p.image).subscribe((image: Image) =>{
          this.images.push(image);
        })
      );
    });
  }

  getImage(p: Park) : string{
    let value = this.images.find(i => i.id == p.image);
    if(value == null)
      return "";
    return value.data;
  }

  openPark(p) {
    // Sempre abre a Pagina Park passando como parametro o parque selecionado
    this.navCtrl.push(ParkPage, {park: p});
  }

}
