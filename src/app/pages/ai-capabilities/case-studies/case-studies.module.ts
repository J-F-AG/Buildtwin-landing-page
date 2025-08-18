import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaseStudiesComponent } from './case-studies.component';
import { CarouselModule } from 'ngx-owl-carousel-o';

@NgModule({
  declarations: [
    CaseStudiesComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    CaseStudiesComponent
  ]
})
export class CaseStudiesModule { }

