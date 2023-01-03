import { Component, Input, OnInit } from '@angular/core';
import { ServService } from './service/serv.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'subject-behaviour';
  nameValue!: string;
  value!:string;
  data = "data will be passing from parent to child";
  constructor(
    private _behaviourService: ServService
  ){
    this._behaviourService.name.subscribe((value)=>{
      this.nameValue = value;
    })
  }
  ngOnInit(): void {
    
  }

  submitValue(name:any){
    //this.nameValue = name.value;
    this._behaviourService.name.next(name.value);
  }

  getData(event:string){
    this.value = event;
  }
}

