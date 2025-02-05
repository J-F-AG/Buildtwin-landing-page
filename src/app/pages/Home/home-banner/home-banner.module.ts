import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeBannerComponent } from './home-banner.component';
import { RouterModule } from '@angular/router';
import { HubspotModule } from 'src/app/include-component/hubspot/hubspot.module';



@NgModule({
  declarations: [HomeBannerComponent],
  imports: [
    CommonModule,
    RouterModule,
    HubspotModule
  ],
  exports: [HomeBannerComponent]
})
export class HomeBannerModule { }
