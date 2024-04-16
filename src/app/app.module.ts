import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
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

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { NgxScrollTopModule } from 'ngx-scrolltop';









import { CountUpModule } from 'ngx-countup';
import { LightgalleryModule } from 'lightgallery/angular';



import { HttpClientModule } from '@angular/common/http';
import { ThreeColMarketComponent } from './components/three-col-market/three-col-market.component';
import { AiDrivenServicesComponent } from './components/ai-driven-services/ai-driven-services.component';
import { HowBuildtwinHelpsComponent } from './components/how-buildtwin-helps/how-buildtwin-helps.component';
import { TraningReviewComponent } from './components/traning-review/traning-review.component';
import { HowProcessComponent } from './components/how-process/how-process.component';
import { BuildtwinServicesComponent } from './components/buildtwin-services/buildtwin-services.component';
import { AboutLorenzComponent } from './components/about-lorenz/about-lorenz.component';
import { SucessStoryComponent } from './components/sucess-story/sucess-story.component';
import { TraningCompanyComponent } from './components/traning-company/traning-company.component';
import { GlobalCompanyComponent } from './components/global-company/global-company.component';
import { ThreeColTraneeComponent } from './components/three-col-tranee/three-col-tranee.component';
import { EventsProgramComponent } from './components/events-program/events-program.component';
import { CourseDemoComponent } from './components/course-demo/course-demo.component';
import { DifferentCountryComponent } from './components/different-country/different-country.component';
import { PriceCoPilotComponent } from './components/price-co-pilot/price-co-pilot.component';
import { PriceMonthlyComponent } from './components/price-monthly/price-monthly.component';
import { PriceBasicComponent } from './components/price-basic/price-basic.component';
import { ProvideServiceComponent } from './components/provide-service/provide-service.component';
import { OmBannerFreelance2Component } from './components/provide-service/om-banner-freelance2/om-banner-freelance2.component';
import { CountryDetailsComponent } from './components/country-details/country-details.component';
import { ServiceProvideComponent } from './components/service-provide/service-provide.component';
import { OpenMarketTabListComponent } from './components/open-market-tab-list/open-market-tab-list.component';
import { ExperenceComponent } from './components/experence/experence.component';
import { QualifiedComponent } from './components/qualified/qualified.component';
import { MarketPlaceComponent } from './components/market-place/market-place.component';
import { GetStarted1Component } from './components/get-started1/get-started1.component';
import { DataSafetyComponent } from './components/data-safety/data-safety.component';
import { VenderDetailsComponent } from './components/vender-details/vender-details.component';
import { VenderBannerComponent } from './components/vender-banner/vender-banner.component';
import { LatestUpdateComponent } from './components/latest-update/latest-update.component';
import { AccreditationComponent } from './components/accreditation/accreditation.component';
import { FeatureProjectComponent } from './components/feature-project/feature-project.component';
import { CapabilityComponent } from './components/capability/capability.component';
import { AbountJfComponent } from './components/abount-jf/abount-jf.component';
import { SignupComponentComponent } from './components/signup-component/signup-component.component';
import { SimpleRowComponent } from './components/simple-row/simple-row.component';
import { EngineersComponent } from './components/engineers/engineers.component';
import { HereSectionComponent } from './components/here-section/here-section.component';
import { DataPrivacyComponent } from './components/data-privacy/data-safety.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { SocialWallComponent } from './components/social-wall/social-wall.component';
import { HdFooterComponent } from './common/hd-footer/hd-footer.component';
import { HdNavbarComponent } from './common/hd-navbar/hd-navbar.component';
import { EmFaqComponent } from './common/em-faq/em-faq.component';
import { VideoPopupComponent } from './common/video-popup/video-popup.component';
import { HelpDeskHomeComponent } from './components/help-desk-home/help-desk-home.component';
import { HdBannerComponent } from './components/help-desk-home/hd-banner/hd-banner.component';
import { HappierCustomersComponent } from './components/happier-customers/happier-customers.component';
import { HdIntegrationsComponent } from './components/hd-integrations/hd-integrations.component';
import { HdAboutComponent } from './components/hd-about/hd-about.component';
import { HdTestimonialsComponent } from './components/hd-testimonials/hd-testimonials.component';
import { OnlineMeetingHomeComponent } from './components/online-meeting-home/online-meeting-home.component';
import { OmBannerComponent } from './components/online-meeting-home/om-banner/om-banner.component';
import { OmIntegrationsComponent } from './components/om-integrations/om-integrations.component';
import { EmTestimonialsComponent } from './components/em-testimonials/em-testimonials.component';
import { OmWhyChooseUsComponent } from './components/om-why-choose-us/om-why-choose-us.component';
import { OmPartnersComponent } from './components/om-partners/om-partners.component';
import { HdFaqComponent } from './components/hd-faq/hd-faq.component';
import { OnlineMeetingHomeFreelanceComponent } from './components/online-meeting-home-freelance/online-meeting-home-freelance.component';
import { OmBannerFreelanceComponent } from './components/online-meeting-home-freelance/om-banner-freelance/om-banner-freelance.component';
import { OmAboutComponent } from './components/om-about/om-about.component';
import { OmIntegrationsFreelanceComponent } from './components/om-integrations-freelance/om-integrations-freelance.component';
import { TaskManagementBusinessIntelligenceComponent } from './components/task-management-business-intelligence/task-management-business-intelligence.component';
import { TimeTrackingHomeComponent } from './components/time-tracking-home/time-tracking-home.component';
import { TtBannerComponent } from './components/time-tracking-home/tt-banner/tt-banner.component';
import { TtTestimonialsComponent } from './components/tt-testimonials/tt-testimonials.component';
import { TtServicesComponent } from './components/tt-services/tt-services.component';
import { SocialsMediaInfoComponent } from './components/socials-media-info/socials-media-info.component';
import { TaskManagementComponent } from './components/task-management/task-management.component';
import { TtAboutComponent } from './components/tt-about/tt-about.component';
import { TtIntegrationsComponent } from './components/tt-integrations/tt-integrations.component';
import { TtPartnersComponent } from './components/tt-partners/tt-partners.component';
import { CtaComponent } from './components/cta/cta.component';
import { TtFaqComponent } from './components/tt-faq/tt-faq.component';
import { ElearningBannerComponent } from './components/elearning-school/elearning-banner/elearning-banner.component';
import { ElearningSchoolComponent } from './components/elearning-school/elearning-school.component';
import { ElearningAboutComponent } from './components/elearning-school/elearning-about/elearning-about.component';
import { CoursesComponent } from './components/courses/courses.component';
import { PremiumAccessComponent } from './components/premium-access/premium-access.component';
import { FaqPageTrainingComponent } from './components/faq-page-training/faq-page.component';
import { EmFaqTrainingComponent } from './components/faqs-training/em-faq/em-faq.component';
import { EventsComponent } from './components/events/events.component';
import { SubscribeComponent } from './components/subscribe/subscribe.component';
import { PricingPageComponent } from './components/pricing-page/pricing-page.component';
import { HdPricingComponent } from './components/hd-pricing/hd-pricing.component';
import { EmailMarketingHomeComponent } from './components/email-marketing-home/email-marketing-home.component';
import { EmPartnersComponent } from './components/em-partners/em-partners.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { IntegrationsPageComponent } from './components/integrations-page/integrations-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { EmWhyChooseUsComponent } from './components/em-why-choose-us/em-why-choose-us.component';
import { EmFunfactsComponent } from './components/em-funfacts/em-funfacts.component';
import { CoursesDetailsStyleOneComponent } from './components/courses-details-style-one/courses-details-style-one.component';


@NgModule({
  declarations: [
    AppComponent,
   


   
    ThreeColMarketComponent,
    AiDrivenServicesComponent,
    HowBuildtwinHelpsComponent,
    TraningReviewComponent,
    HowProcessComponent,
    BuildtwinServicesComponent,
    AboutLorenzComponent,
    SucessStoryComponent,
    TraningCompanyComponent,
    GlobalCompanyComponent,
    ThreeColTraneeComponent,
    EventsProgramComponent,
    CourseDemoComponent,
    DifferentCountryComponent,
    PriceBasicComponent,
    PriceMonthlyComponent,
    PriceCoPilotComponent,
    ProvideServiceComponent,
    OmBannerFreelance2Component,
    CountryDetailsComponent,
    ServiceProvideComponent,
    OpenMarketTabListComponent,
    ExperenceComponent,
    QualifiedComponent,
    MarketPlaceComponent,
    GetStarted1Component,
    VenderDetailsComponent,
    DataSafetyComponent,
    VenderBannerComponent,
    LatestUpdateComponent,
    AccreditationComponent,
    FeatureProjectComponent,
    CapabilityComponent,
    AbountJfComponent,
    SignupComponentComponent,
    SimpleRowComponent,
    EngineersComponent,
    HereSectionComponent,
    DataPrivacyComponent,
    ComingSoonComponent,
    SocialWallComponent,
    HdFooterComponent,
    HdNavbarComponent,
    EmFaqComponent,
    VideoPopupComponent,
    HelpDeskHomeComponent,
    HdBannerComponent,
    HappierCustomersComponent,
    HdIntegrationsComponent,
    HdAboutComponent,
    HdTestimonialsComponent,
    OnlineMeetingHomeComponent,
    OmBannerComponent,
    OmIntegrationsComponent,
    EmTestimonialsComponent,
    OmWhyChooseUsComponent,
    OmPartnersComponent,
    HdFaqComponent,
    OnlineMeetingHomeFreelanceComponent,
    OmBannerFreelanceComponent,
    OmAboutComponent,
    OmIntegrationsFreelanceComponent,
    TaskManagementBusinessIntelligenceComponent,
    TimeTrackingHomeComponent,
    TtBannerComponent,
    TtTestimonialsComponent,
    TtServicesComponent,
    SocialsMediaInfoComponent,
    TaskManagementComponent,
    TtAboutComponent,
    TtIntegrationsComponent,
    TtPartnersComponent,
    CtaComponent,
    TtFaqComponent,
    ElearningBannerComponent,
    ElearningSchoolComponent,
    ElearningAboutComponent,
    CoursesComponent,
    PremiumAccessComponent,
    FaqPageTrainingComponent,
    EmFaqTrainingComponent,
    EventsComponent,
    SubscribeComponent,
    PricingPageComponent,
    HdPricingComponent,
    EmailMarketingHomeComponent,
    EmPartnersComponent,
    BlogPageComponent,
    FaqPageComponent,
    IntegrationsPageComponent,
    ContactPageComponent,
    AboutPageComponent,
    EmWhyChooseUsComponent,
    EmFunfactsComponent,
    CoursesDetailsStyleOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
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
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
