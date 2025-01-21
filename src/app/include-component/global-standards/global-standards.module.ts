import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalStandardsComponent } from './global-standards.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    GlobalStandardsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    GlobalStandardsComponent
  ]
})
export class GlobalStandardsModule { }
