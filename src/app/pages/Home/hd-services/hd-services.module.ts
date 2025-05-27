import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdServicesComponent } from './hd-services.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    HdServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule,
    MatButtonModule
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
