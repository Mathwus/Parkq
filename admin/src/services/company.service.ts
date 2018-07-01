import {Response} from "express";
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Rx";
import {environment} from "../environments/environment";
import "rxjs/add/operator/map";
import {HttpClient} from "@angular/common/http";

export interface Company {
  id: string,
  cnpj: string,
  name: string,
  description: string
}

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) {

  }

  public getCompanies(): Observable<Company[]> {
    return this.http.get(environment.api + 'company')
      .map((res: Response) => res.content);
  }

  public postCompany(company : Company){
    return this.http.post(environment.api + 'company', company)
  }

  delete(company: Company) {
    //FIXME Fazer comunicação para delete.
    //return this.http.delete(environment.api + 'company', company,)
  }
}
