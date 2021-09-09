import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIRsponse } from './model';
//import * as states from './assets/states.json'



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
  
}
