import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdIntegrationsComponent } from './hd-integrations.component';
import { CarouselModule } from 'ngx-owl-carousel-o';



@NgModule({
  declarations: [
    HdIntegrationsComponent
  ],
  imports: [
    CommonModule,
    CarouselModule
  ],
  exports: [
    HdIntegrationsComponent
  ]
})
export class HdIntegrationsModule { 
  static HdIntegrationsComponent() {
    return HdIntegrationsComponent
  }
}
