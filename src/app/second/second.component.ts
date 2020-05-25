import { Component, OnInit } from '@angular/core';
import { SecondService } from './second.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  providers: [
    SecondService
  ]
})
export class SecondComponent implements OnInit {

  constructor(private secondService: SecondService) { }

  ngOnInit(): void {
  }

}
