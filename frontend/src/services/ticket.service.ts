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
  certification_hash: String,
  is_valid: String,
  booking_time: DateTime,
  remaining_time: DateTime,
  id_attraction: number,
  id_user: number
}

@Injectable()
export class TicketService {

  constructor(private http: HttpClient) {
  }

  /*fixed: Ticket[] = JSON.parse(
    `[{ "id": 1, "position": "1", 
    "is_valid":"S", "remaining_time":"09:30:00",
    "id_attraction":"1", "id_user":"1" }]`);*/

  public getTickets(idAttraction: String, idUser: String): Observable<Ticket[]> {
    //return Observable.of(this.fixed);
    return this.http.get(environment.api + 'ticket?attraction=' + idAttraction + '?user=' + idUser)
        .map((res: Response) => res.json().content);
  }

}
