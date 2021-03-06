import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {environment} from "../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import {HttpClient} from "@angular/common/http";

export interface Attraction {
  id: string,
  image: string,
  name: string,
  description : string
}

@Injectable()
export class AttractionService {

  constructor(private http: HttpClient) {
  }

  public getAttractions(): Observable<Attraction[]> {
    return this.http.get(environment.api + 'attraction')
      .map((res: Response) => res.content);
  }

  public getAttractionsOfPark(idPark : String): Observable<Attraction[]> {
    return this.http.get(environment.api + 'attraction?park=' + idPark)
      .map((res: Response) => res.content);
  }

  public ticketsInQueue(idAttraction:String): Observable<number> {
    return this.http.get<number>(environment.api + 'attraction/queue?attraction=' + idAttraction);
  }
}
