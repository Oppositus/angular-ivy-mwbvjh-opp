import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ZeroRoutingModule } from './zero-routing.module';
import { ZeroComponent } from './zero.component';


@NgModule({
  declarations: [ZeroComponent],
  imports: [
    CommonModule,
    ZeroRoutingModule
  ]
})
export class ZeroModule {
}
