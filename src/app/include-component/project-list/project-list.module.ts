import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';



@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    NzToolTipModule
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectListModule { }
