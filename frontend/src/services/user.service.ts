import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";

export interface User {
  id: string,
  name: string
}

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  public getUser(user: String): Observable<User> {
    return this.http.post<User>(environment.api + 'user', {user})
      .map(value => value);
  }

}
