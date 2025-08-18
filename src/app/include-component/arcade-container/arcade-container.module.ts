import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArcadeContainerComponent } from './arcade-container.component';



@NgModule({
  declarations: [
    ArcadeContainerComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    ArcadeContainerComponent
  ]
})
export class ArcadeContainerModule { }
