import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AiCapabilitiesPageComponent } from './ai-capabilities-page.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../../includes/hd-footer/hd-footer.module';
import { HdGoodCompanyModule } from '../hd-good-company/hd-good-company.module';
import { HdIntegrationsModule } from '../../includes/hd-integrations/hd-integrations.module';
import { CompanyLogosSliderModule } from '../company-logos-slider/company-logos-slider.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
import { TtTestimonialsModule } from '../../marketplace/marketPlace/tt-testimonials/tt-testimonials.module';
import { HeavyLiftingModule } from '../heavy-lifting/heavy-lifting.module';
import { ServiceListModule } from 'src/app/include-component/service-list/service-list.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { AiCapabilitiesBannerModule } from '../ai-capabilities-banner/ai-capabilities-banner.module';
import { BottomContentModule } from '../bottom-content/bottom-content.module';
import { EmFaqModule } from '../../includes/em-faq/em-faq.module';

const routes: Routes = [
  {
    path: '',
    component: AiCapabilitiesPageComponent,
  },
];

@NgModule({
  declarations: [
    AiCapabilitiesPageComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    HdNavbarModule,
    HdFooterModule,
    HdIntegrationsModule,
    HdGoodCompanyModule,
    CompanyLogosSliderModule,
    ProjectListModule,
    TtTestimonialsModule,
    HeavyLiftingModule,
    ServiceListModule,
    SharedModuleModule,
    AiCapabilitiesBannerModule,
    BottomContentModule,
    EmFaqModule,
    RouterModule.forChild(routes),
  ],
})
export class AiCapabilitiesPageModule { }
