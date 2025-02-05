import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdBannerNewComponent } from './hd-banner-new.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { RouterModule } from '@angular/router';
import { HubspotModule } from 'src/app/include-component/hubspot/hubspot.module';

// import { ResizeService } from 'ngx-owl-carousel-o/lib/services/resize.service';



@NgModule({
  declarations: [
    HdBannerNewComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    RouterModule,
    HubspotModule
  ],
  exports: [
    HdBannerNewComponent
  ],
  providers: [
    // ResizeService
  ]
})
export class HdBannerNewModule {
  static HdBannerNewComponent() {
    return HdBannerNewComponent
  }
 }
