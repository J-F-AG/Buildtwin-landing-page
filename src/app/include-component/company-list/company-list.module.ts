import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CompanyListComponent
  ]
})
export class CompanyListModule { }
