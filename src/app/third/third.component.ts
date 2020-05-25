import { Component, OnInit } from '@angular/core';
import { ThirdService } from './third.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss']
})
export class ThirdComponent implements OnInit {

  constructor(private thirdService: ThirdService) { }

  ngOnInit(): void {
  }

}
