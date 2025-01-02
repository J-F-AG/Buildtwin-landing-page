import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HdBannerNewComponent } from './hd-banner-new.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
// import { ResizeService } from 'ngx-owl-carousel-o/lib/services/resize.service';



@NgModule({
  declarations: [
    HdBannerNewComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule
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
