import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdDiscoverProjectsSectorComponent } from './hd-discover-projects.component';



@NgModule({
  declarations: [
    HdDiscoverProjectsSectorComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [
    HdDiscoverProjectsSectorComponent
  ]
})
export class HdDiscoverProjectsSectorModule { }
