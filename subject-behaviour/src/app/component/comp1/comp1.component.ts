import { Component, OnInit } from '@angular/core';
import { ServService } from 'src/app/service/serv.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
  nameValue!: string
  constructor(
    private _behaviourService: ServService
  ){
    this._behaviourService.name.subscribe((value)=>{
      this.nameValue = value;
    })
  }

  ngOnInit(): void {
  }

}
