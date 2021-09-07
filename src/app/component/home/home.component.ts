import { Component, OnInit } from '@angular/core';
import {RequestsService} from '../../sevices/requests.service'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  elements: any = [
    {id: 1, first: 'Mark', last: 'Otto', handle: '@mdo'},
    {id: 2, first: 'Jacob', last: 'Thornton', handle: '@fat'},
    {id: 3, first: 'Larry', last: 'the Bird', handle: '@twitter'},
  ];

  headElements = ['ID', 'Carrier Name', 'Email', 'Phone Number'];
  
  //["Miami FL", "Portland OR", "CLEAR LAKE, MN"];
  constructor(public requestsService : RequestsService) { }


  ngOnInit(): void {

   // this.getData(this.adress);
    

  }

  getData(data : any){
    
    let adress : string[] = [(data.city + "," + data.state)];
    console.log(adress);
    
    this.requestsService.postReq(adress)
        .subscribe(
           res => {
            // let keys = Object.keys(res);
            // keys.forEach(key => {
            //   console.log(typeof key)
            // })
             let i = 0;
            console.log(res.i);
            
            //for (l  in res) {
            //   console.log(item );
              
            //  }
             
            // res.forEach((item : any) => {
            //   //this.elements.push({'name': item.Name, 'email': item.Adress.Email[0], "phone" : item.Phone[0]})
            //   console.log(item );
              
            // });
        }
      )
  }

}
