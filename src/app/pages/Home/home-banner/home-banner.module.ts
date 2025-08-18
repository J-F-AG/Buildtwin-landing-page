import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner.component';
import { RouterModule } from '@angular/router';
import { HubspotModule } from 'src/app/include-component/hubspot/hubspot.module';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';



@NgModule({
  declarations: [HomeBannerComponent],
  imports: [
    CommonModule,
    RouterModule,
    HubspotModule,
    NzCarouselModule
  ],
  exports: [HomeBannerComponent]
})
export class HomeBannerModule { }
