import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectListComponent } from './project-list.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { RouterModule } from '@angular/router';
import { BtSelectModule } from 'buildtwin-library-ux/bt-select';



@NgModule({
  declarations: [
    ProjectListComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    NzToolTipModule,
    RouterModule,
    BtSelectModule
  ],
  exports: [
    ProjectListComponent
  ]
})
export class ProjectListModule { }
