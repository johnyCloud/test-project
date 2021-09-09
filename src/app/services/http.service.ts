import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIRsponse } from './model';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  constructor(private http: HttpClient) { }

  getStates() : Observable<any>{
    let url = '../../assets/states.json';
    return this.http.get<any>(url);
  }

  getCities() : Observable<any>{
    let url = '../../assets/cities.json';
    return this.http.get<any>(url)
  }

  //get by post request all carriers by given locations
  postReq(adress : string) : Observable<APIRsponse> { 
    let params =  new HttpParams()
      .set("Addresses", adress)
    let headers = new HttpHeaders()
      .set('Authorization', 'BasicamRldjpUbU5zTFRBeFl6Y3lOREkwTFRsak1HSXROR1EwWmkxaVpqYzFMV1JrT1RjM09XWXdZakJqTWkwdGJYSks=');

    return this.http.post<APIRsponse>(env.BASE_URL, params, {'headers' : headers});
  }
  
}
