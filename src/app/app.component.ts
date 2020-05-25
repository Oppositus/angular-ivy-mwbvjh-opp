import { AfterViewInit, Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-app';

  constructor(
    private router: Router
  ) {
  }

  ngAfterViewInit() {
    const paths = ['/zero', '/first', '/second', '/third'];
    let index = 0;
    setInterval(() => this.router.navigate([paths[index++ % paths.length]]), 100);
  }
}
