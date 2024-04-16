import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { ProvideServiceComponent } from './components/provide-service/provide-service.component';

import { DataSafetyComponent } from './components/data-safety/data-safety.component';
import { VenderDetailsComponent } from './components/vender-details/vender-details.component';
import { DataPrivacyComponent } from './components/data-privacy/data-safety.component';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { HelpDeskHomeComponent } from './components/help-desk-home/help-desk-home.component';
import { OnlineMeetingHomeComponent } from './components/online-meeting-home/online-meeting-home.component';
import { OnlineMeetingHomeFreelanceComponent } from './components/online-meeting-home-freelance/online-meeting-home-freelance.component';
import { TimeTrackingHomeComponent } from './components/time-tracking-home/time-tracking-home.component';
import { ElearningSchoolComponent } from './components/elearning-school/elearning-school.component';
import { FaqPageTrainingComponent } from './components/faq-page-training/faq-page.component';
import { EventsComponent } from './components/events/events.component';
import { PricingPageComponent } from './components/pricing-page/pricing-page.component';
import { EmailMarketingHomeComponent } from './components/email-marketing-home/email-marketing-home.component';
import { BlogPageComponent } from './components/blog-page/blog-page.component';
import { FaqPageComponent } from './components/faq-page/faq-page.component';
import { IntegrationsPageComponent } from './components/integrations-page/integrations-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { CoursesDetailsStyleOneComponent } from './components/courses-details-style-one/courses-details-style-one.component';

const routes: Routes = [

    
    {path: '', component: HelpDeskHomeComponent},

    {path: 'AI-project-management', component: OnlineMeetingHomeComponent},
    {path: 'business-intelligence', component: OnlineMeetingHomeFreelanceComponent},
    {path: 'marketplace', component: TimeTrackingHomeComponent},
    {path: 'training', component: ElearningSchoolComponent},
    {path: 'provide-service', component: ProvideServiceComponent},
    {path: 'vender-details', component: VenderDetailsComponent},
    {path: 'data-safety', component: DataSafetyComponent},
    {path: 'terms-of-service', component: DataPrivacyComponent},
    {path: 'training-faq', component: FaqPageTrainingComponent},
    {path: 'events', component: EventsComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'good-reason', component: EmailMarketingHomeComponent},
    {path: 'use-cases', component: BlogPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'integrations', component: IntegrationsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'courses-sample', component: CoursesDetailsStyleOneComponent},

    


    // Old pages 

    // {path: 'features', component: FeaturesPageComponent},
    {path: 'coming-soon', component: ComingSoonComponent},
    // {path: 'services', component: ServicesPageComponent},
    // {path: 'service-details', component: ServiceDetailsPageComponent},

    // {path: '**', component: NotFoundComponent} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }