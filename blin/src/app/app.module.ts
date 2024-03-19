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
import { EmailMarketingHomeComponent } from './components/pages/email-marketing-home/email-marketing-home.component';
import { TimeTrackingHomeComponent } from './components/pages/time-tracking-home/time-tracking-home.component';
import { OnlineMeetingHomeComponent } from './components/pages/online-meeting-home/online-meeting-home.component';
import { HelpDeskHomeComponent } from './components/pages/help-desk-home/help-desk-home.component';
import { FintechSaasHomeComponent } from './components/pages/fintech-saas-home/fintech-saas-home.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { EmFooterComponent } from './components/common/footer/em-footer/em-footer.component';
import { EmNavbarComponent } from './components/common/navbar/em-navbar/em-navbar.component';
import { FsNavbarComponent } from './components/common/navbar/fs-navbar/fs-navbar.component';
import { FsFooterComponent } from './components/common/footer/fs-footer/fs-footer.component';
import { HdNavbarComponent } from './components/common/navbar/hd-navbar/hd-navbar.component';
import { HdFooterComponent } from './components/common/footer/hd-footer/hd-footer.component';
import { OmFooterComponent } from './components/common/footer/om-footer/om-footer.component';
import { OmNavbarComponent } from './components/common/navbar/om-navbar/om-navbar.component';
import { TtNavbarComponent } from './components/common/navbar/tt-navbar/tt-navbar.component';
import { TtFooterComponent } from './components/common/footer/tt-footer/tt-footer.component';
import { EmPartnersComponent } from './components/common/partners/em-partners/em-partners.component';
import { EmFeaturesComponent } from './components/common/features/em-features/em-features.component';
import { WhatYouWillGetComponent } from './components/common/what-you-will-get/what-you-will-get.component';
import { AutomationComponent } from './components/common/automation/automation.component';
import { TeamStyleOneComponent } from './components/common/teams/team-style-one/team-style-one.component';
import { TeamStyleTwoComponent } from './components/common/teams/team-style-two/team-style-two.component';
import { TeamStyleThreeComponent } from './components/common/teams/team-style-three/team-style-three.component';
import { SegmentationComponent } from './components/common/segmentation/segmentation.component';
import { EmPricingComponent } from './components/common/pricing/em-pricing/em-pricing.component';
import { EmFaqComponent } from './components/common/faqs/em-faq/em-faq.component';
import { JoinUsComponent } from './components/common/join-us/join-us.component';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { EmBannerComponent } from './components/pages/email-marketing-home/em-banner/em-banner.component';
import { TtBannerComponent } from './components/pages/time-tracking-home/tt-banner/tt-banner.component';
import { TtServicesComponent } from './components/common/services/tt-services/tt-services.component';
import { TtAboutComponent } from './components/common/about/tt-about/tt-about.component';
import { TaskManagementComponent } from './components/common/task-management/task-management.component';
import { TtPartnersComponent } from './components/common/partners/tt-partners/tt-partners.component';
import { TtFeaturesComponent } from './components/common/features/tt-features/tt-features.component';
import { CaseStudiesComponent } from './components/common/case-studies/case-studies.component';
import { CtaComponent } from './components/common/cta/cta.component';
import { EmIntegrationsComponent } from './components/common/integrations/em-integrations/em-integrations.component';
import { TtIntegrationsComponent } from './components/common/integrations/tt-integrations/tt-integrations.component';
import { TtPricingComponent } from './components/common/pricing/tt-pricing/tt-pricing.component';
import { TtFaqComponent } from './components/common/faqs/tt-faq/tt-faq.component';
import { TtBlogComponent } from './components/common/blogs/tt-blog/tt-blog.component';
import { OmBannerComponent } from './components/pages/online-meeting-home/om-banner/om-banner.component';
import { OmServicesComponent } from './components/common/services/om-services/om-services.component';
import { OmWhyChooseUsComponent } from './components/common/why-choose-us/om-why-choose-us/om-why-choose-us.component';
import { OmPartnersComponent } from './components/common/partners/om-partners/om-partners.component';
import { OmFeaturesComponent } from './components/common/features/om-features/om-features.component';
import { OmIntegrationsComponent } from './components/common/integrations/om-integrations/om-integrations.component';
import { OmHowItWorksComponent } from './components/common/how-it-works/om-how-it-works/om-how-it-works.component';
import { OmFunfactsComponent } from './components/common/funfacts/om-funfacts/om-funfacts.component';
import { OmBlogComponent } from './components/common/blogs/om-blog/om-blog.component';
import { OmAboutComponent } from './components/common/about/om-about/om-about.component';
import { EmTestimonialsComponent } from './components/common/testimonials/em-testimonials/em-testimonials.component';
import { TtTestimonialsComponent } from './components/common/testimonials/tt-testimonials/tt-testimonials.component';
import { OmTestimonialsComponent } from './components/common/testimonials/om-testimonials/om-testimonials.component';
import { OmPricingComponent } from './components/common/pricing/om-pricing/om-pricing.component';
import { VideoCallMadeEasyComponent } from './components/common/video-call-made-easy/video-call-made-easy.component';
import { HdBannerComponent } from './components/pages/help-desk-home/hd-banner/hd-banner.component';
import { SocialsMediaInfoComponent } from './components/common/socials-media-info/socials-media-info.component';
import { HdAboutComponent } from './components/common/about/hd-about/hd-about.component';
import { HdServicesComponent } from './components/common/services/hd-services/hd-services.component';
import { HdPartnersComponent } from './components/common/partners/hd-partners/hd-partners.component';
import { HappierCustomersComponent } from './components/common/happier-customers/happier-customers.component';
import { HdHowItWorksComponent } from './components/common/how-it-works/hd-how-it-works/hd-how-it-works.component';
import { HdFunfactsComponent } from './components/common/funfacts/hd-funfacts/hd-funfacts.component';
import { HdFaqComponent } from './components/common/faqs/hd-faq/hd-faq.component';
import { HdPricingComponent } from './components/common/pricing/hd-pricing/hd-pricing.component';
import { HdTestimonialsComponent } from './components/common/testimonials/hd-testimonials/hd-testimonials.component';
import { HdIntegrationsComponent } from './components/common/integrations/hd-integrations/hd-integrations.component';
import { FreeTrialComponent } from './components/common/free-trial/free-trial.component';
import { FsBannerComponent } from './components/pages/fintech-saas-home/fs-banner/fs-banner.component';
import { GetStartedComponent } from './components/common/get-started/get-started.component';
import { FsIntegrationsComponent } from './components/common/integrations/fs-integrations/fs-integrations.component';
import { AppDownloadComponent } from './components/common/app-download/app-download.component';
import { FsTestimonialsComponent } from './components/common/testimonials/fs-testimonials/fs-testimonials.component';
import { FsFunfactsComponent } from './components/common/funfacts/fs-funfacts/fs-funfacts.component';
import { BusinessRevenueComponent } from './components/common/business-revenue/business-revenue.component';
import { FsFeaturesComponent } from './components/common/features/fs-features/fs-features.component';
import { FsServicesComponent } from './components/common/services/fs-services/fs-services.component';
import { FsPartnersComponent } from './components/common/partners/fs-partners/fs-partners.component';
import { PaymentsProductsComponent } from './components/common/payments-products/payments-products.component';
import { TextSliderComponent } from './components/common/text-slider/text-slider.component';
import { FsAboutComponent } from './components/common/about/fs-about/fs-about.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { EmFunfactsComponent } from './components/common/funfacts/em-funfacts/em-funfacts.component';
import { EmWhyChooseUsComponent } from './components/common/why-choose-us/em-why-choose-us/em-why-choose-us.component';
import { EmAboutComponent } from './components/common/about/em-about/em-about.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { ApplyForJoinComponent } from './components/common/apply-for-join/apply-for-join.component';
import { TeamQuotesComponent } from './components/common/team-quotes/team-quotes.component';
import { CareersPageComponent } from './components/pages/careers-page/careers-page.component';
import { OurApproachComponent } from './components/common/our-approach/our-approach.component';
import { JobsComponent } from './components/common/jobs/jobs.component';
import { JobDetailsPageComponent } from './components/pages/job-details-page/job-details-page.component';
import { FeaturesPageComponent } from './components/pages/features-page/features-page.component';
import { EmHowItWorksComponent } from './components/common/how-it-works/em-how-it-works/em-how-it-works.component';
import { EmServicesComponent } from './components/common/services/em-services/em-services.component';
import { CompanyComponent } from './components/common/company/company.component';
import { FeatureDetailsPageComponent } from './components/pages/feature-details-page/feature-details-page.component';
import { PricingPageComponent } from './components/pages/pricing-page/pricing-page.component';
import { ContactPageComponent } from './components/pages/contact-page/contact-page.component';
import { FaqPageComponent } from './components/pages/faq-page/faq-page.component';
import { IntegrationsPageComponent } from './components/pages/integrations-page/integrations-page.component';
import { TestimonialsPageComponent } from './components/pages/testimonials-page/testimonials-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';
import { ForgotPasswordPageComponent } from './components/pages/forgot-password-page/forgot-password-page.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';
import { OtherServicesComponent } from './components/pages/service-details-page/other-services/other-services.component';
import { OnlineMeetingHomeFreelanceComponent } from './components/pages/online-meeting-home-freelance/online-meeting-home-freelance.component';
import { OmBannerFreelanceComponent } from './components/pages/online-meeting-home-freelance/om-banner-freelance/om-banner-freelance.component';
import { OmServicesFreelanceComponent } from './components/common/services/om-services-freelance/om-services-freelance.component';
import { OmWhyChooseUsFreelanceComponent } from './components/common/why-choose-us/om-why-choose-us-freelance/om-why-choose-us-freelance.component';
import { VideoCallMadeEasyFreelanceComponent } from './components/common/video-call-made-easy-freelance/video-call-made-easy-freelance.component';
import { OmPartnersFreelanceComponent } from './components/common/partners/om-partners-freelance/om-partners-freelance.component';
import { OmFeaturesFreelanceComponent } from './components/common/features/om-features-freelance/om-features-freelance.component';
import { OmIntegrationsFreelanceComponent } from './components/common/integrations/om-integrations-freelance/om-integrations-freelance.component';
import { OmHowItWorksFreelanceComponent } from './components/common/how-it-works/om-how-it-works-freelance/om-how-it-works-freelance.component';
import { OmFunfactsFreelanceComponent } from './components/common/funfacts/om-funfacts-freelance/om-funfacts-freelance.component';
import { OmAboutFreelanceComponent } from './components/common/about/om-about-freelance/om-about-freelance.component';
import { OmTestimonialsFreelanceComponent } from './components/common/testimonials/om-testimonials-freelance/om-testimonials-freelance.component';
import { OmPricingFreelanceComponent } from './components/common/pricing/om-pricing-freelance/om-pricing-freelance.component';
import { OmBlogFreelanceComponent } from './components/common/blogs/om-blog-freelance/om-blog-freelance.component';
import { OmFooterFreelanceComponent } from './components/common/footer/om-footer-freelance/om-footer-freelance.component';
import { EnterprisePageComponent } from './components/pages/enterprise-page/enterprise-page.component';
import { EnterpriseBannerComponent } from './components/pages/enterprise-page/enterprise-banner/enterprise-banner.component';
import { EnterpriseServicesComponent } from './components/common/services/enterprise-services/enterprise-services.component';
import { EnterpriseWhyChooseUsComponent } from './components/common/why-choose-us/enterprise-why-choose-us/enterprise-why-choose-us.component';
import { VideoCallMadeEasyEnterpriseComponent } from './components/common/video-call-made-easy-enterprise/video-call-made-easy-enterprise.component';
import { EnterprisePartnersComponent } from './components/common/partners/enterprise-partners/enterprise-partners.component';
import { EnterpriseFeaturesComponent } from './components/common/features/enterprise-features/enterprise-features.component';
import { EnterpriseIntegrationsComponent } from './components/common/integrations/enterprise-integrations/enterprise-integrations.component';
import { EnterpriseHowItWorksComponent } from './components/common/how-it-works/enterprise-how-it-works/enterprise-how-it-works.component';
import { EnterpriseFunfactsComponent } from './components/common/funfacts/enterprise-funfacts/enterprise-funfacts.component';
import { EnterpriseAboutComponent } from './components/common/about/enterprise-about/enterprise-about.component';
import { EnterpriseTestimonialsComponent } from './components/common/testimonials/enterprise-testimonials/enterprise-testimonials.component';
import { EnterprisePricingComponent } from './components/common/pricing/enterprise-pricing/enterprise-pricing.component';
import { EnterpriseBlogComponent } from './components/common/blogs/enterprise-blog/enterprise-blog.component';
import { EnterpriseFooterComponent } from './components/common/footer/enterprise-footer/enterprise-footer.component';
import { BlogDetailsPage5Component } from './components/pages/blog-details-page5/blog-details-page.component';
import { BlogDetailsPage4Component } from './components/pages/blog-details-page4/blog-details-page.component';
import { BlogDetailsPage3Component } from './components/pages/blog-details-page3/blog-details-page.component';
import { BlogDetailsPage2Component } from './components/pages/blog-details-page2/blog-details-page.component';
import { ElearningSchoolComponent } from './components/pages/elearning-school/elearning-school.component';
import { ElearningBannerComponent } from './components/pages/elearning-school/elearning-banner/elearning-banner.component';
import { ElearningAboutComponent } from './components/pages/elearning-school/elearning-about/elearning-about.component';
import { FeaturesStyleOneComponent } from './components/common/features-style-one/features-style-one.component';
import { PartnerComponent } from './components/common/partner/partner.component';
import { CoursesComponent } from './components/common/courses/courses.component';
import { FunfactsFeedbackComponent } from './components/common/funfacts-feedback/funfacts-feedback.component';
import { ViewAllCoursesComponent } from './components/common/view-all-courses/view-all-courses.component';
import { PremiumAccessComponent } from './components/common/premium-access/premium-access.component';
import { CountUpModule } from 'ngx-countup';
import { VideoComponent } from './components/common/video/video.component';
import { LightgalleryModule } from 'lightgallery/angular';
import { TestimonialsComponent } from './components/common/testimonials-v2/testimonials.component';
import { SuccessPeopleComponent } from './components/common/success-people/success-people.component';
import { SuccessStoryComponent } from './components/pages/success-story/success-story.component';
import { OurStoryComponent } from './components/pages/success-story/our-story/our-story.component';
import { CoursesStyleOneComponent } from './components/pages/courses-style-one/courses-style-one.component';
import { TeacherComponent } from './components/pages/teacher/teacher.component';
import { EventsComponent } from './components/pages/events/events.component';
import { SubscribeComponent } from './components/common/subscribe/subscribe.component';
import { UpcomingEventsComponent } from './components/common/upcoming-events/upcoming-events.component';
import { CoursesDetailsStyleOneComponent } from './components/pages/courses-details-style-one/courses-details-style-one.component';
import { EventsDetailsComponent } from './components/pages/events-details/events-details.component';
import { FaqPageTrainingComponent } from './components/pages/faq-page-training/faq-page.component';
import { EmFaqTrainingComponent } from './components/common/faqs-training/em-faq/em-faq.component';
import { HdFaqTrainingComponent } from './components/common/faqs-training/hd-faq/hd-faq.component';
import { TtFaqTrainingComponent } from './components/common/faqs-training/tt-faq/tt-faq.component';

import { HttpClientModule } from '@angular/common/http';
import { VideoPopupModule } from './components/common/video-popup/video-popup.module';
import { ThreeColMarketComponent } from './components/new-com/three-col-market/three-col-market.component';
import { AiDrivenServicesComponent } from './components/new-com/ai-driven-services/ai-driven-services.component';
import { HowBuildtwinHelpsComponent } from './components/new-com/how-buildtwin-helps/how-buildtwin-helps.component';
import { TraningReviewComponent } from './components/new-com/traning-review/traning-review.component';
import { HowProcessComponent } from './components/new-com/how-process/how-process.component';
import { BuildtwinServicesComponent } from './components/new-com/buildtwin-services/buildtwin-services.component';
import { AboutLorenzComponent } from './components/new-com/about-lorenz/about-lorenz.component';
import { SucessStoryComponent } from './components/new-com/sucess-story/sucess-story.component';
import { TraningCompanyComponent } from './components/new-com/traning-company/traning-company.component';
import { GlobalCompanyComponent } from './components/new-com/global-company/global-company.component';
import { ThreeColTraneeComponent } from './components/new-com/three-col-tranee/three-col-tranee.component';
import { EventsProgramComponent } from './components/new-com/events-program/events-program.component';
import { CourseDemoComponent } from './components/new-com/course-demo/course-demo.component';
import { DifferentCountryComponent } from './components/new-com/different-country/different-country.component';


@NgModule({
  declarations: [
    AppComponent,
    EmailMarketingHomeComponent,
    TimeTrackingHomeComponent,
    OnlineMeetingHomeComponent,
    HelpDeskHomeComponent,
    FintechSaasHomeComponent,
    NotFoundComponent,
    EmFooterComponent,
    EmNavbarComponent,
    FsNavbarComponent,
    FsFooterComponent,
    HdNavbarComponent,
    HdFooterComponent,
    OmFooterComponent,
    OmNavbarComponent,
    TtNavbarComponent,
    TtFooterComponent,
    EmPartnersComponent,
    EmFeaturesComponent,
    WhatYouWillGetComponent,
    AutomationComponent,
    TeamStyleOneComponent,
    TeamStyleTwoComponent,
    TeamStyleThreeComponent,
    SegmentationComponent,
    EmPricingComponent,
    EmFaqComponent,
    JoinUsComponent,
    EmBannerComponent,
    TtBannerComponent,
    TtServicesComponent,
    TtAboutComponent,
    TaskManagementComponent,
    TtPartnersComponent,
    TtFeaturesComponent,
    CaseStudiesComponent,
    CtaComponent,
    EmIntegrationsComponent,
    TtIntegrationsComponent,
    TtPricingComponent,
    TtFaqComponent,
    TtBlogComponent,
    OmBannerComponent,
    OmServicesComponent,
    OmWhyChooseUsComponent,
    OmPartnersComponent,
    OmFeaturesComponent,
    OmIntegrationsComponent,
    OmHowItWorksComponent,
    OmFunfactsComponent,
    OmBlogComponent,
    OmAboutComponent,
    EmTestimonialsComponent,
    TtTestimonialsComponent,
    OmTestimonialsComponent,
    OmPricingComponent,
    VideoCallMadeEasyComponent,
    HdBannerComponent,
    SocialsMediaInfoComponent,
    HdAboutComponent,
    HdServicesComponent,
    HdPartnersComponent,
    HappierCustomersComponent,
    HdHowItWorksComponent,
    HdFunfactsComponent,
    HdFaqComponent,
    HdPricingComponent,
    HdTestimonialsComponent,
    HdIntegrationsComponent,
    FreeTrialComponent,
    FsBannerComponent,
    GetStartedComponent,
    FsIntegrationsComponent,
    AppDownloadComponent,
    FsTestimonialsComponent,
    FsFunfactsComponent,
    BusinessRevenueComponent,
    FsFeaturesComponent,
    FsServicesComponent,
    FsPartnersComponent,
    PaymentsProductsComponent,
    TextSliderComponent,
    FsAboutComponent,
    AboutPageComponent,
    EmFunfactsComponent,
    EmWhyChooseUsComponent,
    EmAboutComponent,
    TeamPageComponent,
    ApplyForJoinComponent,
    TeamQuotesComponent,
    CareersPageComponent,
    OurApproachComponent,
    JobsComponent,
    JobDetailsPageComponent,
    FeaturesPageComponent,
    EmHowItWorksComponent,
    EmServicesComponent,
    CompanyComponent,
    FeatureDetailsPageComponent,
    PricingPageComponent,
    ContactPageComponent,
    FaqPageComponent,
    IntegrationsPageComponent,
    TestimonialsPageComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgotPasswordPageComponent,
    BlogPageComponent,
    BlogDetailsPageComponent,
    BlogDetailsPage2Component,
    BlogDetailsPage3Component,
    BlogDetailsPage4Component,
    BlogDetailsPage5Component,
    TermsConditionsPageComponent,
    PrivacyPolicyPageComponent,
    ServicesPageComponent,
    ServiceDetailsPageComponent,
    OtherServicesComponent,

    //freelance import
    OnlineMeetingHomeFreelanceComponent,
    OmBannerFreelanceComponent,
    OmServicesFreelanceComponent,
    OmWhyChooseUsFreelanceComponent,
    VideoCallMadeEasyFreelanceComponent,
    OmPartnersFreelanceComponent,
    OmFeaturesFreelanceComponent,
    OmIntegrationsFreelanceComponent,
    OmHowItWorksFreelanceComponent,
    OmFunfactsFreelanceComponent,
    OmAboutFreelanceComponent,
    OmTestimonialsFreelanceComponent,
    OmPricingFreelanceComponent,
    OmBlogFreelanceComponent,
    OmFooterFreelanceComponent,

    //enterprise import
    EnterprisePageComponent,
    EnterpriseBannerComponent,
    EnterpriseServicesComponent,
    EnterpriseWhyChooseUsComponent,
    VideoCallMadeEasyEnterpriseComponent,
    EnterprisePartnersComponent,
    EnterpriseFeaturesComponent,
    EnterpriseIntegrationsComponent,
    EnterpriseHowItWorksComponent,
    EnterpriseFunfactsComponent,
    EnterpriseAboutComponent,
    EnterpriseTestimonialsComponent,
    EnterprisePricingComponent,
    EnterpriseBlogComponent,
    EnterpriseFooterComponent,


    //TrainingPageComponent
    ElearningSchoolComponent,
    ElearningBannerComponent,
    ElearningAboutComponent,
    FeaturesStyleOneComponent,
    PartnerComponent,
    CoursesComponent,
    FunfactsFeedbackComponent,
    ViewAllCoursesComponent,
    PremiumAccessComponent,
    VideoComponent,
    TestimonialsComponent,

    SuccessStoryComponent,
    OurStoryComponent,
    SuccessPeopleComponent,

    CoursesStyleOneComponent,

    TeacherComponent,

    EventsComponent,
    SubscribeComponent,
    UpcomingEventsComponent,

    CoursesDetailsStyleOneComponent,

    EventsDetailsComponent,

    FaqPageTrainingComponent,
    EmFaqTrainingComponent,
    HdFaqTrainingComponent,
    TtFaqTrainingComponent,
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
    DifferentCountryComponent
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
    VideoPopupModule,
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
