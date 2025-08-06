import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiCapabilitiesBannerComponent } from './ai-capabilities-banner.component';
import { RouterModule } from '@angular/router';
import { HubspotModule } from 'src/app/include-component/hubspot/hubspot.module';



@NgModule({
  declarations: [AiCapabilitiesBannerComponent],
  imports: [
    CommonModule,
    RouterModule,
    HubspotModule
  ],
  exports: [AiCapabilitiesBannerComponent]
})
export class AiCapabilitiesBannerModule { }
