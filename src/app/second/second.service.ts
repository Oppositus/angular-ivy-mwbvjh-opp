import { Injectable, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SecondService implements OnDestroy {

  public secondSubject = new Subject();
  private secondArray = [];

  constructor() {
    this.secondSubject.next(this.secondArray.push(new Array(1000000).join('x')));
    // console.log('Init SecondService', this.secondSubject, this.secondArray);
  }


  ngOnDestroy() {
    this.secondSubject.complete();
    this.secondSubject = null;
    this.secondArray = null;
    // console.log('SecondService SecondService', this.secondSubject, this.secondArray);
  }
}
