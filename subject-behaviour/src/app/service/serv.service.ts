import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ServService {

  constructor(
  ) { }
  //Subject -> not set the initial value
  //Behaviour subject -> set the initial value
  name = new BehaviorSubject<any>(null);
}
