import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BottomContentComponent } from './bottom-content.component';
import { RouterModule } from '@angular/router';
import { ArcadeContainerModule } from '../arcade-container/arcade-container.module';



@NgModule({
  declarations: [
    BottomContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArcadeContainerModule
  ],
  exports: [
    BottomContentComponent
  ]
})
export class BottomContentModule { }
