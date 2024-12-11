import { NgModule } from '@angular/core';
import { BrowserModule, Title, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { HdBannerTabsComponent } from './pages/Home/hd-banner-tabs/hd-banner-tabs.component';
import { HdTrustedByComponent } from './pages/Home/hd-trusted-by/hd-trusted-by.component';
import { HdSolutionProviderComponent } from './pages/Home/hd-solution-provider/hd-solution-provider.component';



import { HappierCustomersComponent } from './pages/Home/happier-customers/happier-customers.component';
import { HowProcessComponent } from './pages/Home/how-process/how-process.component';
import { HdAboutComponent } from './pages/Home/hd-about/hd-about.component';
import { AiDrivenServicesComponent } from './pages/Home/ai-driven-services/ai-driven-services.component';
import { TtIntegrationsComponent } from './pages/marketplace/marketPlace/tt-integrations/tt-integrations.component';
import { EventsComponent } from './pages/training/events/events/events.component';
import { EventsProgramComponent } from './pages/training/events/events/events-program/events-program.component';
import { SubscribeComponent } from './pages/training/events/events/subscribe/subscribe.component';
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
import { VenderDetailsSublimeComponent } from './pages/vender/vender-details-sublime/vender-details-sublime.component';
import { AccreditationComponent } from './pages/vender/accreditation/accreditation.component';
import { VenderDetailsCaldimComponent } from './pages/vender/vender-details-caldim/vender-details-caldim.component';
import { VenderDetailsMoldtekComponent } from './pages/vender/vender-details-moldtek/vender-details-moldtek.component';
import { VenderDetailsAlliedComponent } from './pages/vender/vender-details-allied/vender-details-allied.component';
import { AarbeeSocialWallComponent } from './pages/vender/vender-details-aarbee/social-wall/social-wall.component';
import { MoldtekSocialWallComponent } from './pages/vender/vender-details-moldtek/social-wall/social-wall.component';
import { CaldimSocialWallComponent } from './pages/vender/vender-details-caldim/social-wall/social-wall.component';
import { AlliedSocialWallComponent } from './pages/vender/vender-details-allied/social-wall/social-wall.component';
import { SublimeSocialWallComponent } from './pages/vender/vender-details-sublime/social-wall/social-wall.component';
import { VenderDetailsAarbeeOldComponent } from './pages/vender/vender-details-aarbee2/vender-details-aarbee.component';
import { AarbeeSocialWallOldComponent } from './pages/vender/vender-details-aarbee2/social-wall/social-wall.component';
import { ModalPopupService } from './pages/vender/vender-details-aarbee/modal/modal.service';
import { VenderDetailsUiComponent } from './pages/vender/vender-details-ui/vender-details-ui.component';
import { BookServicesHeaderComponent } from './pages/Home/hd-banner-tabs/book-services-header/book-services-header.component';

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
import { SampleProjectsComponent } from './pages/Services/sample-projects/sample-projects.component';
import { AboutDataCenterSectionComponent } from './pages/sector/about-data-center-section/about-data-center-section.component';




import { BrowseServiceHeaderComponent } from './pages/browse-services/components/browse-service-header/browse-service-header.component';
import { SpecialProjectsComponent } from './pages/browse-services/components/special-projects/special-projects.component';
import { sectorSampleProjectsComponent } from './pages/sector/sample-projects/sample-projects.component';
import { sectorDirectBookingComponent } from './pages/sector/direct-booking/direct-booking.component';
import { sectorSolutionProviderComponent } from './pages/sector/hd-solution-provider/hd-solution-provider.component';
import { FileUploadServiceComponent } from './pages/services-new/free-offer-form/file-upload-service/file-upload-service.component';
import { LowerCaseUrlSerializer } from './services/lowercase-url-serializer';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { en_US, NZ_I18N } from 'ng-zorro-antd/i18n';
import { RouterModule, UrlSerializer } from '@angular/router';
import { SharedModuleModule } from './shared-module/shared-module.module';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BtIconModule } from 'projects/bt-icon/bt-icon.module';



@NgModule({
  declarations: [
    AppComponent,
   HdTrustedByComponent,
   HdSolutionProviderComponent,
   BookServicesHeaderComponent,
   HappierCustomersComponent,
   HowProcessComponent,
   HdAboutComponent,
   AiDrivenServicesComponent,
   TtIntegrationsComponent,


   EventsComponent,
   EventsProgramComponent,
   SubscribeComponent,

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
   VenderDetailsSublimeComponent,
   AccreditationComponent,
   VenderDetailsCaldimComponent,
   VenderDetailsMoldtekComponent,
   VenderDetailsUiComponent,
   VenderDetailsAarbeeOldComponent,
   AarbeeSocialWallOldComponent,
   VenderDetailsAlliedComponent,
   
   HdBannerTabsComponent,
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
   AboutDataCenterSectionComponent,
   BrowseServiceHeaderComponent,
   SpecialProjectsComponent,
   sectorSampleProjectsComponent,
   sectorDirectBookingComponent,
   sectorSolutionProviderComponent,
   FileUploadServiceComponent,
  ],
  imports: [    
    CommonModule,
    BrowserModule,
    RouterModule.forRoot([]),
    AppRoutingModule,
    SharedModuleModule,
    BtIconModule,
    BrowserAnimationsModule
  ],
  providers: [
    Title,
    ModalPopupService,
    provideAnimationsAsync(),
    { provide: NZ_I18N, useValue: en_US },
    provideClientHydration(),
    {provide: UrlSerializer, useClass: LowerCaseUrlSerializer}
    // { provide: NZ_ICONS, useValue: icons },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }