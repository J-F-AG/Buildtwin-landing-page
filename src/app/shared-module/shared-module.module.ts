import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { CountUpModule } from 'ngx-countup';
import { LightgalleryModule } from 'lightgallery/angular';
import { HttpClientModule } from '@angular/common/http';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { BtSelectModule } from 'buildtwin-library-ux/bt-select';
import { BtIconModule } from 'projects/bt-icon/bt-icon.module';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { BtSelectGroupModule } from 'buildtwin-library-ux/bt-select-group';//buildtwin-library-ux
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzUploadModule } from 'ng-zorro-antd/upload';
//import { HdFooterModule } from '../pages/includes/hd-footer/hd-footer.module';
import { RouterModule } from '@angular/router';
import { FreeOfferFormComponent } from '../pages/services-new/free-offer-form/free-offer-form.component';
import { GlobalBannerModule } from '../include-component/global-banner/global-banner.module';
import { HubspotModule } from '../include-component/hubspot/hubspot.module';
import { GetStartedModule } from '../include-component/get-started/get-started.module';
import { HowBuildtwinHelpsComponent } from '../pages/includes/how-buildtwin-helps/how-buildtwin-helps.component';
import { EmTestimonialsComponent } from '../pages/includes/em-testimonials/em-testimonials.component';
import { BuildtwinServicesComponent } from '../pages/includes/buildtwin-services/buildtwin-services.component';
import { OmPartnersComponent } from '../pages/includes/om-partners/om-partners.component';
import { ThreeColMarketComponent } from '../pages/includes/three-col-market/three-col-market.component';
import { DoubleDigitPipe } from '../pages/co-pilot-for/co-pilot/om-why-choose-us/double-digit.pipe';
import { VideoPopupComponent } from '../pages/includes/video-popup/video-popup.component';
import { QualifiedComponent } from '../pages/marketplace/provide-service/qualified/qualified.component';
import { MarketPlaceComponent } from '../pages/marketplace/provide-service/market-place/market-place.component';
import { GetStarted1Component } from '../pages/includes/get-started1/get-started1.component';
// import { EmFaqComponent } from '../pages/includes/em-faq/em-faq.component';
import { TtPartnersComponent } from '../pages/marketplace/marketPlace/tt-partners/tt-partners.component';
import { TaskManagementComponent } from '../pages/marketplace/marketPlace/task-management/task-management.component';
import { CtaComponent } from '../pages/includes/cta/cta.component';
import { GlobalCompanyComponent } from '../pages/training/training/global-company/global-company.component';
import { DifferentCountryComponent } from '../pages/includes/different-country/different-country.component';
import { EmPartnersComponent } from '../pages/whybuildtwin/why-buildtwin/em-partners/em-partners.component';
import { SpecialProjectComponent } from '../include-component/special-project/special-project.component';
import { FaqBuildtwinComponent } from '../pages/services-new/faq-buildtwin/faq-buildtwin.component';
import { DrawingFreelancersComponent } from '../pages/services-new/drawing-freelancers/drawing-freelancers.component';
// import { HdNavbarModule } from '../pages/includes/hd-navbar/hd-navbar.module';

@NgModule({
  declarations: [
    FreeOfferFormComponent, // multiple
    HowBuildtwinHelpsComponent, // online-meeting-home, online-meeting-home-freelance, time-tracking-home, provide-service, elearning-school,
    EmTestimonialsComponent, // online-meeting-home, pricing-page, about-page
    BuildtwinServicesComponent, // online-meeting-home, online-meeting-home-freelance
    OmPartnersComponent, // online-meeting-home, online-meeting-home-freelance
    ThreeColMarketComponent, // online-meeting-home, online-meeting-home-freelance, hd-banner, om-banner-freelance2, premium-access
    DoubleDigitPipe,
    VideoPopupComponent,
    QualifiedComponent,
    MarketPlaceComponent,
    GetStarted1Component,
    // EmFaqComponent, // provide-service, pricing-page, faq-page, faq-page,
    TtPartnersComponent, // time-tracking-home, blog-page
    TaskManagementComponent, // time-tracking-home, online-meeting-home
    CtaComponent, // time-tracking-home, email-marketing-home
    GlobalCompanyComponent,
    DifferentCountryComponent, // help-desk, course
    EmPartnersComponent, // email-marketing-home, about-page
    SpecialProjectComponent, //browse-services-main, sector
    FaqBuildtwinComponent, // sector, service-new
    DrawingFreelancersComponent, // sector, service-new,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CarouselModule,
    MatSelectModule,
    MatExpansionModule,
    NgxScrollTopModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTooltipModule,
    CountUpModule,
    LightgalleryModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzSpinModule,
    NzRateModule,
    NzToolTipModule,
    BtSelectModule,
    NzDatePickerModule,
    MatTabsModule, 
    MatIconModule,
    NzCarouselModule,
    NzProgressModule,
    NzModalModule,
    NzSkeletonModule,
    NzSelectModule,
    BtSelectGroupModule,
    NzDropDownModule,
    NzUploadModule,
    RouterModule,
    BtIconModule,
    GlobalBannerModule,
    HubspotModule,
    GetStartedModule,
    //HdNavbarModule,
   //HdFooterModule
  ],
  exports: [
    // BrowserAnimationsModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    CarouselModule,
    MatSelectModule,
    MatExpansionModule,
    NgxScrollTopModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTooltipModule,
    CountUpModule,
    LightgalleryModule,
    ReactiveFormsModule,
    HttpClientModule,
    NzSpinModule,
    NzRateModule,
    NzToolTipModule,
    BtSelectModule,
    NzDatePickerModule,
    MatTabsModule, 
    MatIconModule,
    NzCarouselModule,
    NzProgressModule,
    NzModalModule,
    NzSkeletonModule,
    NzSelectModule,
    BtSelectGroupModule,
    NzDropDownModule,
    NzUploadModule,
    //HdNavbarModule,
    //HdFooterModule,
    // HdGoodCompanyComponent,
    // HdIntegrationsComponent,
    RouterModule,
    BtIconModule,
    GlobalBannerModule,
    HubspotModule,
    GetStartedModule,
    FreeOfferFormComponent,
    HowBuildtwinHelpsComponent,
    EmTestimonialsComponent,
    BuildtwinServicesComponent,
    OmPartnersComponent,
    ThreeColMarketComponent,
    DoubleDigitPipe,
    VideoPopupComponent,
    QualifiedComponent,
    MarketPlaceComponent,
    GetStarted1Component,
    // EmFaqComponent,
    TtPartnersComponent,
    TaskManagementComponent,
    CtaComponent,
    GlobalCompanyComponent,
    DifferentCountryComponent,
    EmPartnersComponent,
    SpecialProjectComponent,
    FaqBuildtwinComponent,
    DrawingFreelancersComponent,
    // ServiceCategoryComponent
  ]
})
export class SharedModuleModule { }
