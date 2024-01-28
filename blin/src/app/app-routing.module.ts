import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailMarketingHomeComponent } from './components/pages/email-marketing-home/email-marketing-home.component';
import { TimeTrackingHomeComponent } from './components/pages/time-tracking-home/time-tracking-home.component';
import { OnlineMeetingHomeComponent } from './components/pages/online-meeting-home/online-meeting-home.component';
import { HelpDeskHomeComponent } from './components/pages/help-desk-home/help-desk-home.component';
import { FintechSaasHomeComponent } from './components/pages/fintech-saas-home/fintech-saas-home.component';
import { NotFoundComponent } from './components/common/not-found/not-found.component';
import { AboutPageComponent } from './components/pages/about-page/about-page.component';
import { TeamPageComponent } from './components/pages/team-page/team-page.component';
import { CareersPageComponent } from './components/pages/careers-page/careers-page.component';
import { JobDetailsPageComponent } from './components/pages/job-details-page/job-details-page.component';
import { FeaturesPageComponent } from './components/pages/features-page/features-page.component';
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
import { PrivacyPolicyPageComponent } from './components/pages/privacy-policy-page/privacy-policy-page.component';
import { TermsConditionsPageComponent } from './components/pages/terms-conditions-page/terms-conditions-page.component';
import { ServicesPageComponent } from './components/pages/services-page/services-page.component';
import { ServiceDetailsPageComponent } from './components/pages/service-details-page/service-details-page.component';

const routes: Routes = [
    {path: '', component: HelpDeskHomeComponent},
    {path: 'e-mail-marketing', component: EmailMarketingHomeComponent},
    {path: 'time-tracking', component: TimeTrackingHomeComponent},
    {path: 'online-meeting', component: OnlineMeetingHomeComponent},
    {path: 'help-desk', component: HelpDeskHomeComponent},
    {path: 'fintech-saas', component: FintechSaasHomeComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'team', component: TeamPageComponent},
    {path: 'careers', component: CareersPageComponent},
    {path: 'job-details', component: JobDetailsPageComponent},
    {path: 'features', component: FeaturesPageComponent},
    {path: 'feature-details', component: FeatureDetailsPageComponent},
    {path: 'services', component: ServicesPageComponent},
    {path: 'service-details', component: ServiceDetailsPageComponent},
    {path: 'pricing', component: PricingPageComponent},
    {path: 'integrations', component: IntegrationsPageComponent},
    {path: 'faq', component: FaqPageComponent},
    {path: 'testimonials', component: TestimonialsPageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'register', component: RegisterPageComponent},
    {path: 'forgot-password', component: ForgotPasswordPageComponent},
    {path: 'blog', component: BlogPageComponent},
    {path: 'blog-details', component: BlogDetailsPageComponent},
    {path: 'privacy-policy', component: PrivacyPolicyPageComponent},
    {path: 'terms-conditions', component: TermsConditionsPageComponent},
    {path: 'contact', component: ContactPageComponent},
    {path: 'freelancer', component: OnlineMeetingHomeComponent},
    {path: 'technical-team', component: OnlineMeetingHomeComponent},


    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }