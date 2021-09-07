import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../sevices/requests.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public adress : string[] = ["Miami FL", "Portland OR", "CLEAR LAKE, MN"];
  constructor(public requestsService : RequestsService) { }


  ngOnInit(): void {

    this.getData(this.adress);

  }

  getData(adress: string[]){
    this.requestsService.postReq( adress)
      .subscribe(
        data => {
          console.log(data);
          
        }
      )
  }

}
