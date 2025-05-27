import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { BimServicesNewComponent } from './services-new.component';
import { BimBannerComponent } from './banner/banner.component';
import { BimDrawingFreelancersComponent } from './drawing-freelancers/drawing-freelancers.component';
import { BimE2eEncryptionComponent } from './e2e-encryption/e2e-encryption.component';
import { BimFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { BimHowItWorksNewComponent } from './how-it-works/how-it-works.component';
import { BimLiveTrackingNewComponent } from './live-tracking/live-tracking.component';
import { BimPlugPlayNewComponent } from './plug-play/plug-play.component';
import { BimPrecastServiceComponent } from './precast-service/precast-service.component';
import { BimSampleDrawingComponent } from './sample-drawing/sample-drawing.component';
import { BimServicesOfferedComponent } from './services-offered/services-offered.component';
import { BimThreeCardsComponent } from './three-cards/three-cards.component';
import { BimTopVendorsComponent } from './top-vendors/top-vendors.component';
import { TrustByModule } from './trust-by/trust-by.module';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';

const routes: Routes = [
  {
    path: '',
    component: BimServicesNewComponent,
  },
];

@NgModule({
  declarations: [
    BimServicesNewComponent,
    BimBannerComponent,
    BimDrawingFreelancersComponent,
    BimE2eEncryptionComponent,
    BimFaqBuildtwinComponent,
    BimHowItWorksNewComponent,
    BimLiveTrackingNewComponent,
    BimPlugPlayNewComponent,
    BimPrecastServiceComponent,
    BimSampleDrawingComponent,
    BimServicesOfferedComponent,
    BimThreeCardsComponent,
    BimTopVendorsComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    TrustByModule,
    HdNavbarModule,
        HdFooterModule,
    RouterModule.forChild(routes),
  ],
})
export class BimServicesNewModule { }
