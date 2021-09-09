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

  public elements: any = null;
  public headElements = [ 'Carrier Name', 'Email', 'Phone Number'];

  public citiesList : any[] = [];
  public location: any;
  public locationList: any[] = [];
 
  constructor(public httpService : HttpService) { }

  ngOnInit(): void {
    this.getCitiesList();
  }

  //get selctet location from form
  setLocation(newLocation : SearchLocation){
    this.location = newLocation;
    console.log(this.location);
    this.getCitiesInRadius(this.location);
    this.getData(this.locationList)
  }

  //cities location coordonates
  getCitiesList(){
    this.httpService.getCities()
    .subscribe(res =>
      {this.citiesList = Object.values(res)}
    )
  }

//get all the cities in a given radius
  getCitiesInRadius(location: SearchLocation){
    let lt : number;
    let ln : number;
    this.citiesList.forEach(item => {
      if(item.city === location.city) 
        {
          lt = item.latitude;
          ln = item.longitude;
        }
    })
    this.citiesList.forEach(item => {
      if(location.radius > this.getDistance(lt, ln, item.latitude, item.longitude)) 
        {
          this.locationList.push(item.city)
        }
    })
  }

  //calculate distance between 2 locations
  getDistance(lat1: any, lon1: any, lat2: any, lon2: any){
    const R = 6371e3; // metres
    const φ1 = lat1 * Math.PI/180; // φ, λ in radians
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;
 
    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
      Math.cos(φ1) * Math.cos(φ2) *
      Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
 
    const d = R * c; // in metres
    return d/1000;
  }
  

  //get list of carriers
  getData(data : any){
    
    let address = data;
    console.log(address);
    
    this.httpService.postReq(address)
        .subscribe(
           res => {
            this.elements = [];
            let values = Object.values(res);
            values.forEach(value => {
              this.elements.push({
                'name': value.Name, 
                'email': value.Address.Email[0], 
                'phone': value.Address.Phone[0]});     
            })
        }
      )
  }
  
}
