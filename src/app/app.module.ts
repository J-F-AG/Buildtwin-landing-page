import { NgModule } from '@angular/core';
import { BrowserModule, Title, provideClientHydration } from '@angular/platform-browser';
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
// import { HdBannerComponent } from './pages/Home/hd-banner/hd-banner.component';
import { HdBannerNewComponent } from './pages/Home/hd-banner-new/hd-banner-new.component';
import { HdBannerTabsComponent } from './pages/Home/hd-banner-tabs/hd-banner-tabs.component';
import { HdTrustedByComponent } from './pages/Home/hd-trusted-by/hd-trusted-by.component';
import { HdSolutionProviderComponent } from './pages/Home/hd-solution-provider/hd-solution-provider.component';



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
import { CaldimSocialWallComponent } from './pages/vender/vender-details-caldim/social-wall/social-wall.component';
import { AlliedSocialWallComponent } from './pages/vender/vender-details-allied/social-wall/social-wall.component';
import { SublimeSocialWallComponent } from './pages/vender/vender-details-sublime/social-wall/social-wall.component';
import { OmBannerFooterComponent } from './pages/co-pilot-for/co-pilot/om-banner/om-banner-footer/om-banner-footer.component';
import { DoubleDigitPipe } from './pages/co-pilot-for/co-pilot/om-why-choose-us/double-digit.pipe';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { VenderDetailsAarbeeOldComponent } from './pages/vender/vender-details-aarbee2/vender-details-aarbee.component';
import { AarbeeSocialWallOldComponent } from './pages/vender/vender-details-aarbee2/social-wall/social-wall.component';
import { NzProgressModule } from 'ng-zorro-antd/progress';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { ModalPopupService } from './pages/vender/vender-details-aarbee/modal/modal.service';
import { ModalComponent } from './pages/vender/vender-details-aarbee/modal/modal.component';
import { VenderDetailsUiComponent } from './pages/vender/vender-details-ui/vender-details-ui.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { BookServicesHeaderComponent } from './pages/Home/hd-banner-tabs/book-services-header/book-services-header.component';

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { BtSelectModule } from 'buildtwin-library-ux/bt-select';
// import { BtIconModule } from 'buildtwin-library-ux/bt-icon';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { BtIconModule } from 'projects/bt-icon/bt-icon.module';
import { HdServicesComponent } from './pages/Home/hd-services/hd-services.component';

import { NzCarouselModule } from 'ng-zorro-antd/carousel';
import { HdDiscoverProjectsComponent } from './pages/Home/hd-discover-projects/hd-discover-projects.component';
import { HdWhyBuildtwinComponent } from './pages/Home/hd-why-buildtwin/hd-why-buildtwin.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { ServicesComponent } from './pages/Services/services/services.component';
import { MainBannerComponent } from './pages/Services/main-banner/main-banner.component';
import { DirectBookingComponent } from './pages/Services/direct-booking/direct-booking.component';
import { DrawingsComponent } from './pages/Services/drawings/drawings.component';
import { E2eEncryptedComponent } from './pages/Services/e2e-encrypted/e2e-encrypted.component';
import { HowItWorksComponent } from './pages/Services/how-it-works/how-it-works.component';
import { LiveTrackingComponent } from './pages/Services/live-tracking/live-tracking.component';
import { MeetingStandardsComponent } from './pages/Services/meeting-standards/meeting-standards.component';
import { RightTeamComponent } from './pages/Services/right-team/right-team.component';
import { ServTrustedByComponent } from './pages/Services/serv-trusted-by/serv-trusted-by.component';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { SampleProjectsComponent } from './pages/Services/sample-projects/sample-projects.component';
import { SectorComponent } from './pages/sector/sector.component';
import { DataCenterSectionComponent } from './pages/sector/data-center-section/data-center-section.component';
import { AboutDataCenterSectionComponent } from './pages/sector/about-data-center-section/about-data-center-section.component';
import { DcEuropeComponent } from './pages/sector/dc-europe/dc-europe.component';
import { GetStartedComponent } from './pages/sector/get-started/get-started.component';




import { BtSelectGroupModule } from 'buildtwin-library-ux/bt-select-group';//buildtwin-library-ux
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { GlobalBannerModule } from './include-component/global-banner/global-banner.module';
import { BrowseServicesMainComponent } from './pages/browse-services/browse-services-main/browse-services-main.component';
import { BrowseServiceHeaderComponent } from './pages/browse-services/components/browse-service-header/browse-service-header.component';
import { SpecialProjectsComponent } from './pages/browse-services/components/special-projects/special-projects.component';
import { WhyBuildtwinComponent } from './include-component/why-buildtwin/why-buildtwin.component';
import { HubspotModule } from './include-component/hubspot/hubspot.module';
import { sectorSampleProjectsComponent } from './pages/sector/sample-projects/sample-projects.component';
import { sectorMeetingStandardsComponent } from './pages/sector/meeting-standards/meeting-standards.component';
import { sectorDirectBookingComponent } from './pages/sector/direct-booking/direct-booking.component';
import { sectorSolutionProviderComponent } from './pages/sector/hd-solution-provider/hd-solution-provider.component';
import { ServicesNewComponent } from './pages/services-new/services-new.component';
import { BannerComponent } from './pages/services-new/banner/banner.component';
import { DrawingFreelancersComponent } from './pages/services-new/drawing-freelancers/drawing-freelancers.component';
import { E2eEncryptionComponent } from './pages/services-new/e2e-encryption/e2e-encryption.component';
import { FaqBuildtwinComponent } from './pages/services-new/faq-buildtwin/faq-buildtwin.component';
import { FreeOfferFormComponent } from './pages/services-new/free-offer-form/free-offer-form.component';
import { HowItWorksNewComponent } from './pages/services-new/how-it-works/how-it-works.component';
import { LiveTrackingNewComponent } from './pages/services-new/live-tracking/live-tracking.component';
import { PlugPlayNewComponent } from './pages/services-new/plug-play/plug-play.component';
import { PrecastServiceComponent } from './pages/services-new/precast-service/precast-service.component';
import { SampleDrawingComponent } from './pages/services-new/sample-drawing/sample-drawing.component';
import { ServicesOfferedComponent } from './pages/services-new/services-offered/services-offered.component';
import { ThreeCardsComponent } from './pages/services-new/three-cards/three-cards.component';
import { TopVendorsComponent } from './pages/services-new/top-vendors/top-vendors.component';
import { TrustByNewComponent } from './pages/services-new/trust-by/trust-by.component';
import { NzUploadModule } from 'ng-zorro-antd/upload';
import { FileUploadServiceComponent } from './pages/services-new/free-offer-form/file-upload-service/file-upload-service.component';
import { GetStartedModule } from './include-component/get-started/get-started.module';
import { RebarServicesNewComponent } from './pages/rebar/services-new.component';
import { RebarBannerComponent } from './pages/rebar/banner/banner.component';
import { RebarDrawingFreelancersComponent } from './pages/rebar/drawing-freelancers/drawing-freelancers.component';
import { RebarE2eEncryptionComponent } from './pages/rebar/e2e-encryption/e2e-encryption.component';
import { RebarFaqBuildtwinComponent } from './pages/rebar/faq-buildtwin/faq-buildtwin.component';
// import { RebarFreeOfferFormComponent } from './pages/rebar/free-offer-form/free-offer-form.component';
import { RebarHowItWorksNewComponent } from './pages/rebar/how-it-works/how-it-works.component';
import { RebarLiveTrackingNewComponent } from './pages/rebar/live-tracking/live-tracking.component';
import { RebarPlugPlayNewComponent } from './pages/rebar/plug-play/plug-play.component';
import { RebarPrecastServiceComponent } from './pages/rebar/precast-service/precast-service.component';
import { RebarSampleDrawingComponent } from './pages/rebar/sample-drawing/sample-drawing.component';
import { RebarServicesOfferedComponent } from './pages/rebar/services-offered/services-offered.component';
import { RebarThreeCardsComponent } from './pages/rebar/three-cards/three-cards.component';
import { RebarTopVendorsComponent } from './pages/rebar/top-vendors/top-vendors.component';
import { RebarTrustByNewComponent } from './pages/rebar/trust-by/trust-by.component';
import { BimServicesNewComponent } from './pages/bim/services-new.component';
import { BimBannerComponent } from './pages/bim/banner/banner.component';
import { BimDrawingFreelancersComponent } from './pages/bim/drawing-freelancers/drawing-freelancers.component';
import { BimE2eEncryptionComponent } from './pages/bim/e2e-encryption/e2e-encryption.component';
import { BimFaqBuildtwinComponent } from './pages/bim/faq-buildtwin/faq-buildtwin.component';
// import { BimFileUploadServiceComponent } from './pages/bim/free-offer-form/file-upload-service/file-upload-service.component';
import { BimHowItWorksNewComponent } from './pages/bim/how-it-works/how-it-works.component';
import { BimLiveTrackingNewComponent } from './pages/bim/live-tracking/live-tracking.component';
import { BimPlugPlayNewComponent } from './pages/bim/plug-play/plug-play.component';
import { BimPrecastServiceComponent } from './pages/bim/precast-service/precast-service.component';
import { BimSampleDrawingComponent } from './pages/bim/sample-drawing/sample-drawing.component';
import { BimServicesOfferedComponent } from './pages/bim/services-offered/services-offered.component';
import { BimThreeCardsComponent } from './pages/bim/three-cards/three-cards.component';
import { BimTopVendorsComponent } from './pages/bim/top-vendors/top-vendors.component';
import { BimTrustByNewComponent } from './pages/bim/trust-by/trust-by.component';
import { StructuralSteelServicesNewComponent } from './pages/structural-steel/services-new.component';
import { StructuralSteelBannerComponent } from './pages/structural-steel/banner/banner.component';
import { StructuralSteelDrawingFreelancersComponent } from './pages/structural-steel/drawing-freelancers/drawing-freelancers.component';
import { StructuralSteelE2eEncryptionComponent } from './pages/structural-steel/e2e-encryption/e2e-encryption.component';
import { StructuralSteelFaqBuildtwinComponent } from './pages/structural-steel/faq-buildtwin/faq-buildtwin.component';
// import { StructuralSteelFreeOfferFormComponent } from './pages/structural-steel/free-offer-form/free-offer-form.component';
import { StructuralSteelHowItWorksNewComponent } from './pages/structural-steel/how-it-works/how-it-works.component';
import { StructuralSteelLiveTrackingNewComponent } from './pages/structural-steel/live-tracking/live-tracking.component';
import { StructuralSteelPlugPlayNewComponent } from './pages/structural-steel/plug-play/plug-play.component';
// import { StructuralSteelFileUploadServiceComponent } from './pages/structural-steel/free-offer-form/file-upload-service/file-upload-service.component';
import { StructuralSteelPrecastServiceComponent } from './pages/structural-steel/precast-service/precast-service.component';
import { StructuralSteelSampleDrawingComponent } from './pages/structural-steel/sample-drawing/sample-drawing.component';
import { StructuralSteelServicesOfferedComponent } from './pages/structural-steel/services-offered/services-offered.component';
import { StructuralSteelThreeCardsComponent } from './pages/structural-steel/three-cards/three-cards.component';
import { StructuralSteelTopVendorsComponent } from './pages/structural-steel/top-vendors/top-vendors.component';
import { StructuralSteelTrustByNewComponent } from './pages/structural-steel/trust-by/trust-by.component';

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
  //  HdBannerComponent,
   HdBannerNewComponent,
   HdTrustedByComponent,
   HdSolutionProviderComponent,
   BookServicesHeaderComponent,

   HappierCustomersComponent,
   HowProcessComponent,
   HdAboutComponent,
   AiDrivenServicesComponent,
   HdTestimonialsComponent,

   OnlineMeetingHomeComponent,
   OmBannerComponent,
   OmBannerFooterComponent,
   OmIntegrationsComponent,
   SignupComponentComponent,
   OmWhyChooseUsComponent,
   HdFaqComponent,
   DoubleDigitPipe,


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
   CaldimSocialWallComponent,
   AlliedSocialWallComponent,
   SublimeSocialWallComponent,
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
   VenderDetailsUiComponent,
   VenderDetailsAarbeeOldComponent,
   AarbeeSocialWallOldComponent,
   VenderDetailsAlliedComponent,
   ModalComponent,
   
   HdBannerTabsComponent,
   HdServicesComponent,
   HdDiscoverProjectsComponent,
   HdWhyBuildtwinComponent,
   ServicesComponent,
   MainBannerComponent,
   DirectBookingComponent,
   DrawingsComponent,
   E2eEncryptedComponent,
   HowItWorksComponent,
   LiveTrackingComponent,
   MeetingStandardsComponent,
   RightTeamComponent,
   ServTrustedByComponent,
   SampleProjectsComponent,
   SectorComponent,
   DataCenterSectionComponent,
   AboutDataCenterSectionComponent,
   DcEuropeComponent,
   GetStartedComponent,

   BrowseServicesMainComponent,
   BrowseServiceHeaderComponent,
   SpecialProjectsComponent,
   WhyBuildtwinComponent,
   sectorSampleProjectsComponent,
   sectorMeetingStandardsComponent,
   sectorDirectBookingComponent,
   sectorSolutionProviderComponent,

   ServicesNewComponent,
   BannerComponent,
   DrawingFreelancersComponent,
   E2eEncryptionComponent,
   HowItWorksNewComponent,
   LiveTrackingNewComponent,
   PlugPlayNewComponent,
   PrecastServiceComponent,
   SampleDrawingComponent,
   ServicesOfferedComponent,
   ThreeCardsComponent,
   TopVendorsComponent,
   TrustByNewComponent,
   
   FreeOfferFormComponent,
   FaqBuildtwinComponent  ,
   FileUploadServiceComponent,
   RebarServicesNewComponent,
   RebarBannerComponent,
   RebarDrawingFreelancersComponent,
   RebarE2eEncryptionComponent,
   RebarFaqBuildtwinComponent,
  //  RebarFreeOfferFormComponent,
   RebarHowItWorksNewComponent,
   RebarLiveTrackingNewComponent,
   RebarPlugPlayNewComponent,
   RebarPrecastServiceComponent,
   RebarSampleDrawingComponent,
   RebarServicesOfferedComponent,
   RebarThreeCardsComponent,
   RebarTopVendorsComponent,
   RebarTrustByNewComponent,
   BimServicesNewComponent,
   BimBannerComponent,
   BimDrawingFreelancersComponent,
   BimE2eEncryptionComponent,
   BimFaqBuildtwinComponent,
  //  BimFileUploadServiceComponent,
   BimHowItWorksNewComponent,
   BimLiveTrackingNewComponent,
   BimPlugPlayNewComponent,
   BimPrecastServiceComponent,
   BimSampleDrawingComponent,
   BimServicesOfferedComponent,
   BimThreeCardsComponent,
   BimTopVendorsComponent,
   BimTrustByNewComponent,

   StructuralSteelServicesNewComponent,
   StructuralSteelBannerComponent,
   StructuralSteelDrawingFreelancersComponent,
   StructuralSteelE2eEncryptionComponent,
   StructuralSteelFaqBuildtwinComponent,
  //  StructuralSteelFileUploadServiceComponent,
   StructuralSteelHowItWorksNewComponent,
   StructuralSteelLiveTrackingNewComponent,
   StructuralSteelPlugPlayNewComponent,
   StructuralSteelPrecastServiceComponent,
   StructuralSteelSampleDrawingComponent,
   StructuralSteelServicesOfferedComponent,
   StructuralSteelThreeCardsComponent,
   StructuralSteelTopVendorsComponent,
   StructuralSteelTrustByNewComponent

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
    NzSpinModule,
    NzRateModule,
    BtSelectModule,
    BtIconModule,
    NzDatePickerModule,
    MatTabsModule, 
    MatIconModule,
    NzCarouselModule,
    NzProgressModule,
    NzModalModule,
    NzSkeletonModule,
    NzSelectModule,
    GlobalBannerModule,
    BtSelectGroupModule,
    NzDropDownModule,
    HubspotModule,
    NzUploadModule,
    GetStartedModule
  ],
  providers: [
    Title,
    ModalPopupService,
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US },
    provideClientHydration(),
    // { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
