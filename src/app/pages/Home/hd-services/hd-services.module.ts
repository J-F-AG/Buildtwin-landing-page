import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdServicesComponent } from './hd-services.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HdServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports: [
    HdServicesComponent
  ]
})
export class HdServicesModule {
  static HdServicesComponent() {
    return HdServicesComponent
  }
 }
