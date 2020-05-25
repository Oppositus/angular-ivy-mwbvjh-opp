import { Component, OnDestroy, OnInit } from '@angular/core';
import { FirstService } from './first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit, OnDestroy {

  public firstArray = [];

  constructor(private firstService: FirstService) {
  }

  ngOnInit(): void {
    this.firstArray.push(new Array(1000000).join('x'));
  }

  ngOnDestroy() {
    this.firstArray = null;
    this.firstService.ngOnDestroy();
  }

}
