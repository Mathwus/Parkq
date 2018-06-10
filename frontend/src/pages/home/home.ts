import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Park, ParkService} from "../../services/park.service";
import {ParkPage} from "../park/park";
import {ImageService} from "../../services/image.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public parks: Park[] = [];

  constructor(private parkService: ParkService,
              private imageService: ImageService,
              public navCtrl: NavController) {

  }

  public ngOnInit(): void {
    // Busca os parques
    this.parkService.getParks().subscribe((parks: Park[]) => {
      this.parks = parks;
    });
  }

  getImage(p: Park) : string{
    return this.imageService.getImage(p.id_image)
  }

  openPark(p) {
    // Sempre abre a Pagina Park passando como parametro o parque selecionado
    this.navCtrl.push(ParkPage, {park: p});
  }

}
