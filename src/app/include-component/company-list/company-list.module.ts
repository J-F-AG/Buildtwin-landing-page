import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyListComponent } from './company-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



@NgModule({
  declarations: [
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    NzToolTipModule
  ],
  exports: [
    CompanyListComponent
  ]
})
export class CompanyListModule { }
