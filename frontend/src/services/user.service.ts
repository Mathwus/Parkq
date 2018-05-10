import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {Http} from "@angular/http";
import {environment} from "../environments/environment";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";

export interface User {
  id: number,
  phone_number: string
}

@Injectable()
export class UserService {

  constructor(private http: Http) {
  }

  fixed: User[] = JSON.parse(
    `[{ "id": 1, "phone_number": "992394545" }]`);

  public getUsers(): Observable<User[]> {
    return Observable.of(this.fixed);
    /*
    return this.http.get(environment.api + 'park?size=100')
        .map((res: Response) => res.json().content);
    */
  }

}
