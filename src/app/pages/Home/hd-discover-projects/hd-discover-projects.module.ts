import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdDiscoverProjectsComponent } from './hd-discover-projects.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HdDiscoverProjectsComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    CarouselModule
  ],
  exports : [
    HdDiscoverProjectsComponent
  ]
})
export class HdDiscoverProjectsModule {
  static HdDiscoverProjectsComponent() {
    return HdDiscoverProjectsComponent
  }
 }
