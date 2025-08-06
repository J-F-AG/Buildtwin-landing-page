import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomContentComponent } from './bottom-content.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    BottomContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    BottomContentComponent
  ]
})
export class BottomContentModule { }
