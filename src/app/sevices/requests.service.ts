import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from  '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { APIRsponse } from '../services/model';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(private http: HttpClient) { }
  
  //make a post request
  postReq(adress : string) : Observable<APIRsponse> { 
    let params =  new HttpParams()
      .set("Addresses", adress)
    let headers = new HttpHeaders()
      .set('Authorization', 'BasicamRldjpUbU5zTFRBeFl6Y3lOREkwTFRsak1HSXROR1EwWmkxaVpqYzFMV1JrT1RjM09XWXdZakJqTWkwdGJYSks=');

    return this.http.post<APIRsponse>(env.BASE_URL, params, {'headers' : headers});
  }

}
