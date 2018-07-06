import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Attraction, AttractionService} from '../../services/attraction.service';
import {ImageService} from "../../services/image.service";
import {AttractionInfoPage} from "../attractionInfo/attractionInfo";
import {Ticket, TicketService} from "../../services/ticket.service";

@Component({
  selector: 'page-attraction',
  templateUrl: 'attraction.html'
})
export class AttractionPage {

  ticketsInQueue = 0;
  selectedAttraction: Attraction;
  selectedTicket : Ticket;

  constructor(private imageService: ImageService,
              private ticketService: TicketService,
              private attractionService: AttractionService,
              public navCtrl: NavController,
              public navParams: NavParams) {
    this.selectedAttraction = navParams.get('attraction');
  }

  public ngOnInit(): void {
    this.attractionService.ticketsInQueue(this.selectedAttraction.id)
      .subscribe(
        data => {
          this.ticketsInQueue = data
        }
      );
    this.ticketService.findTicket(this.selectedAttraction.id)
      .subscribe(
      data => this.selectedTicket = data
      );
    this.selectedTicket = null
  }

  requestTicket(){
    this.ticketService.getTickets(this.selectedAttraction.id)
      .subscribe(
        data => this.selectedTicket = data
      );
  }

  cancelTicket(){
    this.ticketService.findTicket(this.selectedAttraction.id)
      .subscribe(
        data => this.selectedTicket = data
      );
    this.selectedTicket = null
  }

  getImage() : string{
    return this.imageService.getImage(this.selectedAttraction.image)
  }

  getDataTicket() : string{
    return this.selectedAttraction.id + "|" + this.selectedTicket.id;
  }

  openInformation() {
    this.navCtrl.push(AttractionInfoPage, {attraction: this.selectedAttraction});
  }

}
