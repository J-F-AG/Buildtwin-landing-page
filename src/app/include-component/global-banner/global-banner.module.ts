import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalBannerComponent } from './global-banner.component';
import { BtSelectModule } from 'buildtwin-library-ux/bt-select';//buildtwin-library-ux



@NgModule({
  declarations: [
    GlobalBannerComponent
  ],
  imports: [
    CommonModule,
    BtSelectModule
  ],
  exports: [
    GlobalBannerComponent
  ]
})
export class GlobalBannerModule { }
