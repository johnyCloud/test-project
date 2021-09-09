import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { SearchLocation } from '../search-form/model';
//import {RequestsService} from '../../sevices/requests.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // elements: any = null;
  // headElements = [ 'Carrier Name', 'Email', 'Phone Number'];
  public citiesList : any = [];

  public location: any;
 
  constructor(public httpService : HttpService) { }

  ngOnInit(): void {
    this.httpService.getCities()
    .subscribe(
      res =>{
        this.citiesList = res
      }
    )
    console.log(this.citiesList);
    
  }

  setLocation(newLocation : SearchLocation){
    this.location = newLocation;
    console.log(this.location);
  }


  

  //executet on search button
  // getData(data : any){
    
  //   let address = (data.city + " " + data.state);
    
  //   this.requestsService.postReq(address)
  //       .subscribe(
  //          res => {
  //           this.elements = [];
  //           let values = Object.values(res);
  //           values.forEach(value => {
  //             this.elements.push({
  //               'name': value.Name, 
  //               'email': value.Address.Email[0], 
  //               'phone': value.Address.Phone[0]});     
  //           })
  //       }
  //     )
  // }
  
}
