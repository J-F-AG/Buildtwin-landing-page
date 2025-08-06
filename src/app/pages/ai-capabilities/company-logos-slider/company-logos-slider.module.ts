import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyLogosSliderComponent } from './company-logos-slider.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CompanyLogosSliderComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule
  ],
  exports: [
    CompanyLogosSliderComponent
  ]
})
export class CompanyLogosSliderModule { }
