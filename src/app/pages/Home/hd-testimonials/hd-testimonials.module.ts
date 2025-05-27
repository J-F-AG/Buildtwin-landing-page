import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdTestimonialsComponent } from './hd-testimonials.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';



@NgModule({
  declarations: [
    HdTestimonialsComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
  ],
  exports: [
    HdTestimonialsComponent
  ]
})
export class HdTestimonialsModule {
  static HdTestimonialsComponent() {
    return HdTestimonialsComponent
  }
 }
