import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class FirstService implements OnDestroy {

  public firstBehaviourSubject = new BehaviorSubject(null);

  constructor() {
    // console.log('Init FirstService', this.firstBehaviourSubject);
  }

  ngOnDestroy() {
    if (this.firstBehaviourSubject) {
      this.firstBehaviourSubject.complete();
      this.firstBehaviourSubject = null;
    }
    // console.log('Destroy FirstService', this.firstBehaviourSubject);
  }
}
