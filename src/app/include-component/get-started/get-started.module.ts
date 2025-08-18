import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GetStartedBlockComponent } from './get-started.component';



@NgModule({
  declarations: [
    GetStartedBlockComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    GetStartedBlockComponent
  ]
})
export class GetStartedModule { }
