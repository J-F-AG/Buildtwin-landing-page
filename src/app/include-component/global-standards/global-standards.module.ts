import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalStandardsComponent } from './global-standards.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    GlobalStandardsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule
  ],
  exports: [
    GlobalStandardsComponent
  ]
})
export class GlobalStandardsModule { }
