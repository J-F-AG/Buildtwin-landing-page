import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TtTestimonialsComponent } from './tt-testimonials.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    TtTestimonialsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule
  ],
  exports: [
    TtTestimonialsComponent
  ]
})
export class TtTestimonialsModule { }
