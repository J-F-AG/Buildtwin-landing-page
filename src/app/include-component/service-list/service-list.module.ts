import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServiceListComponent } from './service-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    ServiceListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    ServiceListComponent
  ]
})
export class ServiceListModule { }
