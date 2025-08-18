import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLiftingComponent } from './heavy-lifting.component';
import { TtTestimonialsModule } from '../../marketplace/marketPlace/tt-testimonials/tt-testimonials.module';



@NgModule({
  declarations: [
    HeavyLiftingComponent
  ],
  imports: [
    CommonModule,
    TtTestimonialsModule
  ],
  exports: [
    HeavyLiftingComponent
  ]
})
export class HeavyLiftingModule { }
