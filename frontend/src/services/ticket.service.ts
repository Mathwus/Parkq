import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import {DateTime} from "ionic-angular";

export interface Ticket {
  id: number,
  position: number,
  certification_hash: String,
  is_valid: String,
  booking_time: DateTime,
  entry_time: DateTime,
  id_attraction: number,
  id_user: number
}

@Injectable()
export class TicketService {

  constructor() {
  }

  fixed: Ticket[] = JSON.parse(
    `[{ "id": 1, "position": "1", "certification_hash": "casdah123", 
    "is_valid":"S", "booking_time":"10/05/2018 10:00:00", "entry_time":"10/05/2018 09:30:00",
    "id_attraction":"1", "id_user":"1" }]`);

  public getTickets(): Observable<Ticket[]> {
    return Observable.of(this.fixed);
    /*
    return this.http.get(environment.api + 'park?size=100')
        .map((res: Response) => res.json().content);
    */
  }

}
