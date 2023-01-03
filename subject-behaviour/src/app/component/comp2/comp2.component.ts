import { Component,OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  @Output() sendVal = new EventEmitter<string>();
  @Input() data = "";
  value!: string
  constructor() { }

  ngOnInit(): void {
  }
  sendValue(name:any){
    this.value = name.value;
    this.sendVal.emit(this.value);
  }
}
