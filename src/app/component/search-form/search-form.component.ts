import { Component, OnInit, Output } from '@angular/core';
import { HttpService } from 'src/app/services/http.service';
import { EventEmitter } from '@angular/core';
import { SearchLocation } from './model';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  public states : any;
  public stateList : string[] = [];
  public selectedState: string= "";
  public selectedCity: string = "";
  public radius: number = 0; 

  @Output() formEvent = new EventEmitter<SearchLocation>()
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getStatesData();
  }

  getStatesData(){
    this.httpService.getStates()
      .subscribe( respones =>{
        this.states = respones;
        this.stateList = Object.keys(respones);
      })
  }

  log(name: any){
    console.log(name);
    
  }

  confirmLocation(location : SearchLocation){
    this.formEvent.emit(location);
  }
  
}
