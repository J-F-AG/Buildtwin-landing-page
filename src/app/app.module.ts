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
import { HelpDeskHomeComponent } from './pages/Home/help-desk-home/help-desk-home.component';
import { HdNavbarComponent } from './pages/includes/hd-navbar/hd-navbar.component';
import { HdFooterComponent } from './pages/includes/hd-footer/hd-footer.component';

import { ThreeColMarketComponent } from './pages/includes/three-col-market/three-col-market.component';
import { HdBannerComponent } from './pages/Home/hd-banner/hd-banner.component';
import { HappierCustomersComponent } from './pages/Home/happier-customers/happier-customers.component';
import { HdIntegrationsComponent } from './pages/includes/hd-integrations/hd-integrations.component';
import { HowProcessComponent } from './pages/Home/how-process/how-process.component';
import { HdAboutComponent } from './pages/Home/hd-about/hd-about.component';
import { AiDrivenServicesComponent } from './pages/Home/ai-driven-services/ai-driven-services.component';
import { DifferentCountryComponent } from './pages/includes/different-country/different-country.component';
import { HdTestimonialsComponent } from './pages/Home/hd-testimonials/hd-testimonials.component';
import { OnlineMeetingHomeComponent } from './pages/co-pilot-for/co-pilot/online-meeting-home/online-meeting-home.component';
import { OmBannerComponent } from './pages/co-pilot-for/co-pilot/om-banner/om-banner.component';
import { VideoPopupComponent } from './pages/includes/video-popup/video-popup.component';
import { HowBuildtwinHelpsComponent } from './pages/includes/how-buildtwin-helps/how-buildtwin-helps.component';
import { OmIntegrationsComponent } from './pages/co-pilot-for/co-pilot/om-integrations/om-integrations.component';
import { SignupComponentComponent } from './pages/co-pilot-for/co-pilot/signup-component/signup-component.component';
import { EmTestimonialsComponent } from './pages/includes/em-testimonials/em-testimonials.component';
import { BuildtwinServicesComponent } from './pages/includes/buildtwin-services/buildtwin-services.component';
import { OmWhyChooseUsComponent } from './pages/co-pilot-for/co-pilot/om-why-choose-us/om-why-choose-us.component';
import { OmPartnersComponent } from './pages/includes/om-partners/om-partners.component';
import { HdFaqComponent } from './pages/co-pilot-for/co-pilot/hd-faq/hd-faq.component';
import { OnlineMeetingHomeFreelanceComponent } from './pages/co-pilot-for/digital-self-management/online-meeting-home-freelance/online-meeting-home-freelance.component';
import { OmBannerFreelanceComponent } from './pages/co-pilot-for/digital-self-management/om-banner-freelance/om-banner-freelance.component';
import { OmAboutComponent } from './pages/co-pilot-for/digital-self-management/om-about/om-about.component';
import { OmIntegrationsFreelanceComponent } from './pages/co-pilot-for/digital-self-management/om-integrations-freelance/om-integrations-freelance.component';
import { TaskManagementBusinessIntelligenceComponent } from './pages/co-pilot-for/digital-self-management/task-management-business-intelligence/task-management-business-intelligence.component';
import { ProvideServiceComponent } from './pages/marketplace/provide-service/provide-service.component';
import { OmBannerFreelance2Component } from './pages/marketplace/provide-service/om-banner-freelance2/om-banner-freelance2.component';
import { ExperenceComponent } from './pages/marketplace/provide-service/experence/experence.component';
import { OpenMarketTabListComponent } from './pages/marketplace/provide-service/open-market-tab-list/open-market-tab-list.component';
import { CountryDetailsComponent } from './pages/marketplace/provide-service/country-details/country-details.component';
import { ServiceProvideComponent } from './pages/marketplace/provide-service/service-provide/service-provide.component';
import { QualifiedComponent } from './pages/marketplace/provide-service/qualified/qualified.component';
import { MarketPlaceComponent } from './pages/marketplace/provide-service/market-place/market-place.component';
import { GetStarted1Component } from './pages/includes/get-started1/get-started1.component';
import { EmFaqComponent } from './pages/includes/em-faq/em-faq.component';
import { TimeTrackingHomeComponent } from './pages/marketplace/marketPlace/time-tracking-home/time-tracking-home.component';
import { TtBannerComponent } from './pages/marketplace/marketPlace/tt-banner/tt-banner.component';
import { TtTestimonialsComponent } from './pages/marketplace/marketPlace/tt-testimonials/tt-testimonials.component';
import { TtServicesComponent } from './pages/marketplace/marketPlace/tt-services/tt-services.component';
import { SocialsMediaInfoComponent } from './pages/marketplace/marketPlace/socials-media-info/socials-media-info.component';
import { TaskManagementComponent } from './pages/marketplace/marketPlace/task-management/task-management.component';
import { TtAboutComponent } from './pages/marketplace/marketPlace/tt-about/tt-about.component';
import { TtIntegrationsComponent } from './pages/marketplace/marketPlace/tt-integrations/tt-integrations.component';
import { TtPartnersComponent } from './pages/marketplace/marketPlace/tt-partners/tt-partners.component';
import { CtaComponent } from './pages/includes/cta/cta.component';
import { TtFaqComponent } from './pages/marketplace/marketPlace/tt-faq/tt-faq.component';
import { ElearningSchoolComponent } from './pages/training/training/elearning-school/elearning-school.component';
import { ElearningBannerComponent } from './pages/training/training/elearning-banner/elearning-banner.component';
import { ElearningAboutComponent } from './pages/training/training/elearning-about/elearning-about.component';
import { ThreeColTraneeComponent } from './pages/training/training/three-col-tranee/three-col-tranee.component';
import { CoursesComponent } from './pages/training/training/courses/courses.component';
import { GlobalCompanyComponent } from './pages/training/training/global-company/global-company.component';
import { TraningCompanyComponent } from './pages/training/training/traning-company/traning-company.component';
import { PremiumAccessComponent } from './pages/training/training/premium-access/premium-access.component';
import { EventsComponent } from './pages/training/events/events/events.component';
import { EventsProgramComponent } from './pages/training/events/events/events-program/events-program.component';
import { SubscribeComponent } from './pages/training/events/events/subscribe/subscribe.component';
import { FaqPageTrainingComponent } from './pages/training/faq/faq-page-training/faq-page.component';
import { EmFaqTrainingComponent } from './pages/training/faq/faqs-training/em-faq/em-faq.component';
import { PricingPageComponent } from './pages/price/pricing-page/pricing-page.component';
import { HdPricingComponent } from './pages/price/hd-pricing/hd-pricing.component';
import { PriceBasicComponent } from './pages/price/price-basic/price-basic.component';
import { PriceCoPilotComponent } from './pages/price/price-co-pilot/price-co-pilot.component';
import { PriceMonthlyComponent } from './pages/price/price-monthly/price-monthly.component';
import { EmailMarketingHomeComponent } from './pages/whybuildtwin/why-buildtwin/email-marketing-home/email-marketing-home.component';
import { HereSectionComponent } from './pages/whybuildtwin/why-buildtwin/here-section/here-section.component';
import { EmPartnersComponent } from './pages/whybuildtwin/why-buildtwin/em-partners/em-partners.component';
import { BlogPageComponent } from './pages/whybuildtwin/customer-sucess/blog-page/blog-page.component';
import { FaqPageComponent } from './pages/whybuildtwin/faq/faq-page/faq-page.component';
import { DataSafetyComponent } from './pages/whybuildtwin/data-safety/data-safety.component';
import { IntegrationsPageComponent } from './pages/whybuildtwin/integrations-page/integrations-page.component';
import { ContactPageComponent } from './pages/whybuildtwin/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/whybuildtwin/about-page/about-page.component';
import { AboutLorenzComponent } from './pages/whybuildtwin/about-page/about-lorenz/about-lorenz.component';
import { EmWhyChooseUsComponent } from './pages/whybuildtwin/about-page/em-why-choose-us/em-why-choose-us.component';
import { EmFunfactsComponent } from './pages/whybuildtwin/about-page/em-funfacts/em-funfacts.component';
import { TraningReviewComponent } from './pages/whybuildtwin/about-page/traning-review/traning-review.component';
import { VenderDetailsComponent } from './pages/vender/vender-details/vender-details.component';
import { VenderBannerComponent } from './pages/vender/vender-banner/vender-banner.component';
import { AbountJfComponent } from './pages/vender/abount-jf/abount-jf.component';
import { CapabilityComponent } from './pages/vender/capability/capability.component';
import { EngineersComponent } from './pages/vender/engineers/engineers.component';
import { FeatureProjectComponent } from './pages/vender/feature-project/feature-project.component';
import { SimpleRowComponent } from './pages/vender/simple-row/simple-row.component';
import { SocialWallComponent } from './pages/vender/social-wall/social-wall.component';
import { CoursesDetailsStyleOneComponent } from './pages/training/training/sub-page/courses-details-style-one/courses-details-style-one.component';
import { CourseDemoComponent } from './pages/training/training/sub-page/course-demo/course-demo.component';
import { DataPrivacyComponent } from './pages/data-privacy/data-safety.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './pages/terms-conditions-page/terms-conditions-page.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { VenderDetailsSublimeComponent } from './pages/vender/vender-details-sublime/vender-details-sublime.component';
import { AccreditationComponent } from './pages/vender/accreditation/accreditation.component';
import { VenderDetailsCaldimComponent } from './pages/vender/vender-details-caldim/vender-details-caldim.component';
import { VenderDetailsMoldtekComponent } from './pages/vender/vender-details-moldtek/vender-details-moldtek.component';
import { VenderDetailsAarbeeComponent } from './pages/vender/vender-details-aarbee/vender-details-aarbee.component';
import { VenderDetailsAlliedComponent } from './pages/vender/vender-details-allied/vender-details-allied.component';
import { AarbeeSocialWallComponent } from './pages/vender/vender-details-aarbee/social-wall/social-wall.component';
import { MoldtekSocialWallComponent } from './pages/vender/vender-details-moldtek/social-wall/social-wall.component';



@NgModule({
  declarations: [
   

    HdNavbarComponent,
    HdFooterComponent,
    ThreeColMarketComponent,
    HdIntegrationsComponent,
    DifferentCountryComponent,
    VideoPopupComponent,
    HowBuildtwinHelpsComponent,
    EmTestimonialsComponent,
    BuildtwinServicesComponent,
    OmPartnersComponent,
    GetStarted1Component,
    EmFaqComponent,
    CtaComponent,
        // pages
    AppComponent,
   HelpDeskHomeComponent,
   HdBannerComponent,
   HappierCustomersComponent,
   HowProcessComponent,
   HdAboutComponent,
   AiDrivenServicesComponent,
   HdTestimonialsComponent,

   OnlineMeetingHomeComponent,
   OmBannerComponent,
   OmIntegrationsComponent,
   SignupComponentComponent,
   OmWhyChooseUsComponent,
   HdFaqComponent,


   OnlineMeetingHomeFreelanceComponent,
   OmBannerFreelanceComponent,
   OmAboutComponent,
   OmIntegrationsFreelanceComponent,
   TaskManagementBusinessIntelligenceComponent,

   ProvideServiceComponent,
   OmBannerFreelance2Component,
   ExperenceComponent,
   OpenMarketTabListComponent,
   CountryDetailsComponent,
   ServiceProvideComponent,
   QualifiedComponent,
   MarketPlaceComponent,


   TimeTrackingHomeComponent,
   TtBannerComponent,
   TtTestimonialsComponent,
   TtServicesComponent,
   SocialsMediaInfoComponent,
   TaskManagementComponent,
   TtAboutComponent,
   TtIntegrationsComponent,
   TtPartnersComponent,
   TtFaqComponent,


   ElearningSchoolComponent,
   ElearningBannerComponent,
   ElearningAboutComponent,
   ThreeColTraneeComponent,
   CoursesComponent,
   GlobalCompanyComponent,
   TraningCompanyComponent,
   PremiumAccessComponent,


   EventsComponent,
   EventsProgramComponent,
   SubscribeComponent,

   FaqPageTrainingComponent,
   EmFaqTrainingComponent,

   PricingPageComponent,
   HdPricingComponent,
   PriceBasicComponent,
   PriceCoPilotComponent,
   PriceMonthlyComponent,


   EmailMarketingHomeComponent,
   HereSectionComponent,
   EmPartnersComponent,


   BlogPageComponent,
   FaqPageComponent,
   DataSafetyComponent,
   IntegrationsPageComponent,
   ContactPageComponent,

   AboutPageComponent,
   AboutLorenzComponent,
   EmWhyChooseUsComponent,
   EmFunfactsComponent,
   TraningReviewComponent,

   VenderDetailsComponent,
   VenderBannerComponent,
   AbountJfComponent,
   CapabilityComponent,
   EngineersComponent,
   FeatureProjectComponent,
   SimpleRowComponent,
   SocialWallComponent,
   AarbeeSocialWallComponent,
   MoldtekSocialWallComponent,
   CoursesDetailsStyleOneComponent,
   CourseDemoComponent,
   DataPrivacyComponent,
   
   PrivacyPolicyPageComponent,
   TermsConditionsPageComponent,
   ComingSoonComponent,
   VenderDetailsSublimeComponent,
   AccreditationComponent,
   VenderDetailsCaldimComponent,
   VenderDetailsMoldtekComponent,
   VenderDetailsAarbeeComponent,
   VenderDetailsAlliedComponent

   
    
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
