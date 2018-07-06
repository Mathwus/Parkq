import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import {DateTime} from "ionic-angular";
import {HttpClient} from "@angular/common/http";
import {Response} from "express";
import {environment} from "../environments/environment";

export interface Ticket {
  id: number,
  position: number,
  remaining_time: DateTime
}

@Injectable()
export class TicketService {

  constructor(private http: HttpClient) {
  }

  /*fixed: Ticket[] = JSON.parse(
    `[{ "id": 1, "position": "1",
    "is_valid":"S", "remaining_time":"09:30:00",
    "id_attraction":"1", "id_user":"1" }]`);*/

  public getTickets(idAttraction: String): Observable<Ticket> {
    //return Observable.of(this.fixed);
    return this.http.get<Ticket>(environment.api + 'ticket/new?attraction=' +
      idAttraction + '?user=' + localStorage.getItem("user"))
      ;
  }

  public findTicket(idAttraction: String) : Observable<Ticket>{
    return this.http.get<Ticket>(environment.api + 'ticket?attraction=' + idAttraction +
      '&user=' + localStorage.getItem("user")).map(value => value);
  }
}
