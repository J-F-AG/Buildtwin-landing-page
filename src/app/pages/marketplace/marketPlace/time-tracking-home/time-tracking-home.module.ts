import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { TimeTrackingHomeComponent } from './time-tracking-home.component';
import { TtBannerComponent } from '../tt-banner/tt-banner.component';
import { TtTestimonialsComponent } from '../tt-testimonials/tt-testimonials.component';
import { TtServicesComponent } from '../tt-services/tt-services.component';
import { TtAboutComponent } from '../tt-about/tt-about.component';
import { TtFaqComponent } from '../tt-faq/tt-faq.component';
import { SocialsMediaInfoComponent } from '../socials-media-info/socials-media-info.component';

const routes: Routes = [
  {
    path: '',
    component: TimeTrackingHomeComponent,
  },
];

@NgModule({
  declarations: [
    TimeTrackingHomeComponent,
    TtBannerComponent,
    TtTestimonialsComponent,
    TtServicesComponent,
    TtAboutComponent,
    TtFaqComponent,
    SocialsMediaInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class TimeTrackingHomeModule { }
