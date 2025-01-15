import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { ProvideServiceComponent } from './provide-service.component';
import { OmBannerFreelance2Component } from './om-banner-freelance2/om-banner-freelance2.component';
import { ExperenceComponent } from './experence/experence.component';
import { OpenMarketTabListComponent } from './open-market-tab-list/open-market-tab-list.component';
import { CountryDetailsComponent } from './country-details/country-details.component';
import { ServiceProvideComponent } from './service-provide/service-provide.component';

const routes: Routes = [
  {
    path: '',
    component: ProvideServiceComponent,
  },
];

@NgModule({
  declarations: [
    ProvideServiceComponent,
    OmBannerFreelance2Component,
    ExperenceComponent,
    OpenMarketTabListComponent,
    CountryDetailsComponent,
    ServiceProvideComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class ProvideServiceModule { }
