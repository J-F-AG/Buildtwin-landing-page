import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdGoodCompanyComponent } from './hd-good-company.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HdGoodCompanyComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ], 
  exports: [
    HdGoodCompanyComponent
  ]
})
export class HdGoodCompanyModule {
  static HdGoodCompanyComponent() {
    return HdGoodCompanyComponent
  }
 }
