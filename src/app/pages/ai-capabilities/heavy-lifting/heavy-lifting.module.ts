import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyLiftingComponent } from './heavy-lifting.component';



@NgModule({
  declarations: [
    HeavyLiftingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeavyLiftingComponent
  ]
})
export class HeavyLiftingModule { }
