import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  

  constructor(private http: HttpClient) { }

  postReq(adress : string[]) : Observable<any[]>{
    const url  = "https://devapi.alvys.io/api/carriers/QueryCarriersByAddress";

    const params =  {"Addresses": adress}
    const headers =  {'Authorization': 'BasicamRldjpUbU5zTFRBeFl6Y3lOREkwTFRsak1HSXROR1EwWmkxaVpqYzFMV1JrT1RjM09XWXdZakJqTWkwdGJYSks='};

    return this.http.post<any[]>(url, params, {'headers' : headers});
  }

}
