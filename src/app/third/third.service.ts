import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class ThirdService implements OnDestroy {

  private thirdBehaviourSubject = new BehaviorSubject(null);
  private thirdArray = [];

  constructor() {
    this.thirdBehaviourSubject.next(this.thirdArray.push(new Array(1000000).join('x')));
    // console.log('Init ThirdService', this.thirdBehaviourSubject, this.thirdArray);
  }

  ngOnDestroy() {
    this.thirdBehaviourSubject.complete();
    this.thirdBehaviourSubject = null;
    this.thirdArray = null;
    // console.log('Destroy ThirdService', this.thirdBehaviourSubject, this.thirdArray);
  }
}
