import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    NzToolTipModule,
    RouterModule
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectListModule { }
