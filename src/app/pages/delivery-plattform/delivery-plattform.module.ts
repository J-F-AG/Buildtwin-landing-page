import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { DeliveryPlattformComponent } from './delivery-plattform.component';
import { OmBannerFreelance2Component } from './om-banner-freelance2/om-banner-freelance2.component';
import { ExperenceComponent } from './experence/experence.component';
import { OpenMarketTabListComponent } from './open-market-tab-list/open-market-tab-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ServiceProvideComponent } from './service-provide/service-provide.component';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
import { Style3Module } from '../style3/style3.module';
import { HubspotModule } from 'src/app/include-component/hubspot/hubspot.module';
import { CompanyLogosSliderModule } from '../Home/company-logos-slider/company-logos-slider.module';
import { TtFaqComponent } from './tt-faq/tt-faq.component';

const routes: Routes = [
  {
    path: '',
    component: DeliveryPlattformComponent,
  },
];

@NgModule({
  declarations: [
    DeliveryPlattformComponent,
    OmBannerFreelance2Component,
    ExperenceComponent,
    OpenMarketTabListComponent,
    CountryDetailsComponent,
    ServiceProvideComponent,
    TtFaqComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HdNavbarModule,
    HdFooterModule,
    Style3Module,
    HubspotModule,
    CompanyLogosSliderModule,
    RouterModule.forChild(routes),
    ProjectListModule
  ],
})
export class DeliveryPlattformModule { }
