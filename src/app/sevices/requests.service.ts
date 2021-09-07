import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  

  constructor(private http: HttpClient) { }

  postReq(adress : string[]){
    const url  = "https://devapi.alvys.io/api/carriers/QueryCarriersByAddress";

    const params =  {"Addresses": adress}
    const headers =  {'Authorization': 'BasicamRldjpUbU5zTFRBeFl6Y3lOREkwTFRsak1HSXROR1EwWmkxaVpqYzFMV1JrT1RjM09XWXdZakJqTWkwdGJYSks='};

    return this.http.post(url, params, {'headers' : headers});
  }

}
