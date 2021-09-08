import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../sevices/requests.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  elements: any = null;
  headElements = [ 'Carrier Name', 'Email', 'Phone Number'];
  
  constructor(public requestsService : RequestsService) { }


  ngOnInit(): void {

  }

  getData(data : any){
    
    let address : string[] = [(data.city + " " + data.state)];
    
    this.requestsService.postReq(address)
        .subscribe(
           res => {
            this.elements = [];
            let values = Object.values(res);
            values.forEach(value => {
              this.elements.push({
                'name': value.Name, 
                'email': value.Address.Email[0], 
                "phone" : value.Address.Phone[0]});     
            })
        }
      )
  }

}
