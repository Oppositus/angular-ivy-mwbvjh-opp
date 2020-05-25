import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThirdRoutingModule } from './third-routing.module';
import { ThirdComponent } from './third.component';
import { ThirdService } from './third.service';


@NgModule({
  declarations: [ThirdComponent],
  imports: [
    CommonModule,
    ThirdRoutingModule
  ],
  providers: [
    ThirdService
  ]
})
export class ThirdModule { }
