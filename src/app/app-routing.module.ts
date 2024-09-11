import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HelpDeskHomeComponent } from './pages/Home/help-desk-home/help-desk-home.component';
import { OnlineMeetingHomeComponent } from './pages/co-pilot-for/co-pilot/online-meeting-home/online-meeting-home.component';
import { OnlineMeetingHomeFreelanceComponent } from './pages/co-pilot-for/digital-self-management/online-meeting-home-freelance/online-meeting-home-freelance.component';
import { ProvideServiceComponent } from './pages/marketplace/provide-service/provide-service.component';
import { TimeTrackingHomeComponent } from './pages/marketplace/marketPlace/time-tracking-home/time-tracking-home.component';
import { ElearningSchoolComponent } from './pages/training/training/elearning-school/elearning-school.component';
import { EventsComponent } from './pages/training/events/events/events.component';
import { FaqPageTrainingComponent } from './pages/training/faq/faq-page-training/faq-page.component';
import { PricingPageComponent } from './pages/price/pricing-page/pricing-page.component';
import { EmailMarketingHomeComponent } from './pages/whybuildtwin/why-buildtwin/email-marketing-home/email-marketing-home.component';
import { BlogPageComponent } from './pages/whybuildtwin/customer-sucess/blog-page/blog-page.component';
import { FaqPageComponent } from './pages/whybuildtwin/faq/faq-page/faq-page.component';
import { DataSafetyComponent } from './pages/whybuildtwin/data-safety/data-safety.component';
import { IntegrationsPageComponent } from './pages/whybuildtwin/integrations-page/integrations-page.component';
import { ContactPageComponent } from './pages/whybuildtwin/contact-page/contact-page.component';
import { AboutPageComponent } from './pages/whybuildtwin/about-page/about-page.component';
import { VenderDetailsComponent } from './pages/vender/vender-details/vender-details.component';
import { CoursesDetailsStyleOneComponent } from './pages/training/training/sub-page/courses-details-style-one/courses-details-style-one.component';
import { DataPrivacyComponent } from './pages/data-privacy/data-safety.component';
import { PrivacyPolicyPageComponent } from './pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './pages/terms-conditions-page/terms-conditions-page.component';
import { ComingSoonComponent } from './pages/coming-soon/coming-soon.component';
import { VenderDetailsSublimeComponent } from './pages/vender/vender-details-sublime/vender-details-sublime.component';
import { VenderDetailsCaldimComponent } from './pages/vender/vender-details-caldim/vender-details-caldim.component';
import { VenderDetailsMoldtekComponent } from './pages/vender/vender-details-moldtek/vender-details-moldtek.component';
import { VenderDetailsAarbeeComponent } from './pages/vender/vender-details-aarbee/vender-details-aarbee.component';
import { VenderDetailsAlliedComponent } from './pages/vender/vender-details-allied/vender-details-allied.component';
import { VenderDetailsAarbeeOldComponent } from './pages/vender/vender-details-aarbee2/vender-details-aarbee.component';
import { VenderDetailsUiComponent } from './pages/vender/vender-details-ui/vender-details-ui.component';
import { ServicesComponent } from './pages/Services/services/services.component';
import { SectorComponent } from './pages/sector/sector.component';
import { BrowseServicesMainComponent } from './pages/browse-services/browse-services-main/browse-services-main.component';




const routes: Routes = [

    
    {path: '', component: HelpDeskHomeComponent},
     {path: 'de', component: HelpDeskHomeComponent},
    {path: 'en', component: HelpDeskHomeComponent},



    {path: 'AI-project-management', component: OnlineMeetingHomeComponent},
    {path: 'business-intelligence', component: OnlineMeetingHomeFreelanceComponent},
    {path: 'provide-service', component: ProvideServiceComponent},
    {path: 'marketplace', component: TimeTrackingHomeComponent},
    {path: 'training', component: ElearningSchoolComponent}, 
    {path: 'events', component: EventsComponent},
    {path: 'training-faq', component: FaqPageTrainingComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'good-reason', component: EmailMarketingHomeComponent}, 
    {path: 'use-cases', component: BlogPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'data-safety', component: DataSafetyComponent},
    {path: 'integrations', component: IntegrationsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'vender-details', component: VenderDetailsComponent},
    {path: 'vender-details-sublimestructures', component: VenderDetailsSublimeComponent},
    {path: 'vender-details-caldim', component: VenderDetailsCaldimComponent},
    {path: 'vender-details-moldtek', component: VenderDetailsMoldtekComponent},
    {path: 'partners/:id', component: VenderDetailsAarbeeComponent},
    {path: 'vender-details-aarbee', component: VenderDetailsAarbeeComponent},
    {path: 'vender-details-ui', component: VenderDetailsUiComponent},
    {path: 'details', component: VenderDetailsAarbeeOldComponent},
    {path: 'vender-details-allied', component: VenderDetailsAlliedComponent},
    {path: 'courses-sample', component: CoursesDetailsStyleOneComponent},
    {path: 'terms-of-service', component: DataPrivacyComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'engineering-services/services', component: ServicesComponent},
    {path: 'engineering-services/sector', component: SectorComponent},
    {path: 'explore-services', component: BrowseServicesMainComponent},
    
    {path: ':lang/AI-project-management', component: OnlineMeetingHomeComponent},
    {path: ':lang/business-intelligence', component: OnlineMeetingHomeFreelanceComponent},
    {path: ':lang/provide-service', component: ProvideServiceComponent},
    {path: ':lang/marketplace', component: TimeTrackingHomeComponent},
    {path: ':lang/training', component: ElearningSchoolComponent}, 
    {path: ':lang/events', component: EventsComponent},
    {path: ':lang/training-faq', component: FaqPageTrainingComponent},
    {path: ':lang/pricing', component: PricingPageComponent},
    {path: ':lang/good-reason', component: EmailMarketingHomeComponent}, 
    {path: ':lang/use-cases', component: BlogPageComponent},
    {path: ':lang/faq', component: FaqPageComponent},
    {path: ':lang/data-safety', component: DataSafetyComponent},
    {path: ':lang/integrations', component: IntegrationsPageComponent},
    {path: ':lang/contact', component: ContactPageComponent},
    {path: ':lang/about', component: AboutPageComponent},
    {path: ':lang/vender-details', component: VenderDetailsComponent},
    {path: ':lang/vender-details-sublimestructures', component: VenderDetailsSublimeComponent},
    {path: ':lang/vender-details-caldim', component: VenderDetailsCaldimComponent},
    {path: ':lang/vender-details-moldtek', component: VenderDetailsMoldtekComponent},
    {path: ':lang/partners/:id', component: VenderDetailsAarbeeComponent},
    {path: 'vender-details-aarbee', component: VenderDetailsAarbeeComponent},
    {path: ':lang/vender-details-ui', component: VenderDetailsUiComponent},
    {path: ':lang/details', component: VenderDetailsAarbeeOldComponent},
    {path: ':lang/vender-details-allied', component: VenderDetailsAlliedComponent},
    {path: ':lang/courses-sample', component: CoursesDetailsStyleOneComponent},
    {path: ':lang/terms-of-service', component: DataPrivacyComponent},
    {path: ':lang/privacy-policy', component: PrivacyPolicyPageComponent},
    {path: ':lang/terms-conditions', component: TermsConditionsPageComponent},
    {path: ':lang/engineering-services/services', component: ServicesComponent},
    {path: ':lang/engineering-services/sector', component: SectorComponent},
    {path: ':lang/explore-services', component: BrowseServicesMainComponent},



    {path: 'coming-soon', component: ComingSoonComponent},


    {path: '**', component: ComingSoonComponent} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
