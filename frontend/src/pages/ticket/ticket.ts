import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Ticket } from '../../services/ticket.service';

@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html'
})
export class TicketPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }
}
