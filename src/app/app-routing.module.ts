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



const routes: Routes = [

    
    {path: '', component: HelpDeskHomeComponent},
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
    {path: 'courses-sample', component: CoursesDetailsStyleOneComponent},
    {path: 'terms-of-service', component: DataPrivacyComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'coming-soon', component: ComingSoonComponent},

    // Old pages 

    // {path: 'features', component: FeaturesPageComponent},
    // {path: 'services', component: ServicesPageComponent},
    // {path: 'service-details', component: ServiceDetailsPageComponent},

    {path: '**', component: ComingSoonComponent} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }