import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { RebarServicesNewComponent } from './services-new.component';
import { RebarTrustByNewComponent } from './trust-by/trust-by.component';
import { RebarTopVendorsComponent } from './top-vendors/top-vendors.component';
import { RebarThreeCardsComponent } from './three-cards/three-cards.component';
import { RebarServicesOfferedComponent } from './services-offered/services-offered.component';
import { RebarSampleDrawingComponent } from './sample-drawing/sample-drawing.component';
import { RebarPrecastServiceComponent } from './precast-service/precast-service.component';
import { RebarPlugPlayNewComponent } from './plug-play/plug-play.component';
import { RebarLiveTrackingNewComponent } from './live-tracking/live-tracking.component';
import { RebarHowItWorksNewComponent } from './how-it-works/how-it-works.component';
import { RebarE2eEncryptionComponent } from './e2e-encryption/e2e-encryption.component';
import { RebarBannerComponent } from './banner/banner.component';
import { RebarDrawingFreelancersComponent } from './drawing-freelancers/drawing-freelancers.component';
import { RebarFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
// import { BannerComponent } from './banner/banner.component';
// import { E2eEncryptionComponent } from './e2e-encryption/e2e-encryption.component';
// import { HowItWorksNewComponent } from './how-it-works/how-it-works.component';
// import { LiveTrackingNewComponent } from './live-tracking/live-tracking.component';
// import { PlugPlayNewComponent } from './plug-play/plug-play.component';
// import { PrecastServiceComponent } from './precast-service/precast-service.component';
// import { SampleDrawingComponent } from './sample-drawing/sample-drawing.component';
// import { ServicesOfferedComponent } from './services-offered/services-offered.component';
// import { ThreeCardsComponent } from './three-cards/three-cards.component';
// import { TopVendorsComponent } from './top-vendors/top-vendors.component';
// import { TrustByNewComponent } from './trust-by/trust-by.component';

const routes: Routes = [
  {
    path: '',
    component: RebarServicesNewComponent,
  },
];

@NgModule({
  declarations: [
    RebarServicesNewComponent,
    RebarBannerComponent,
    RebarDrawingFreelancersComponent,
    RebarE2eEncryptionComponent,
    RebarFaqBuildtwinComponent,
    RebarHowItWorksNewComponent,
    RebarLiveTrackingNewComponent,
    RebarPlugPlayNewComponent,
    RebarPrecastServiceComponent,
    RebarSampleDrawingComponent,
    RebarServicesOfferedComponent,
    RebarThreeCardsComponent,
    RebarTopVendorsComponent,
    RebarTrustByNewComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class RebarServicesNewModule { }
