import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { BimUsaServicesNewComponent } from './services-new.component';
import { BimUsaBannerComponent } from './banner/banner.component';
import { BimUsaDrawingFreelancersComponent } from './drawing-freelancers/drawing-freelancers.component';
import { BimUsaE2eEncryptionComponent } from './e2e-encryption/e2e-encryption.component';
import { BimUsaFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { BimUsaHowItWorksNewComponent } from './how-it-works/how-it-works.component';
import { BimUsaLiveTrackingNewComponent } from './live-tracking/live-tracking.component';
import { BimUsaPlugPlayNewComponent } from './plug-play/plug-play.component';
import { BimUsaPrecastServiceComponent } from './precast-service/precast-service.component';
import { BimUsaSampleDrawingComponent } from './sample-drawing/sample-drawing.component';
import { BimUsaServicesOfferedComponent } from './services-offered/services-offered.component';
import { BimUsaThreeCardsComponent } from './three-cards/three-cards.component';
import { BimUsaTopVendorsComponent } from './top-vendors/top-vendors.component';
import { BimUsaTrustByNewComponent } from './trust-by/trust-by.component';
import { TrustByModule } from '../bim/trust-by/trust-by.module';

const routes: Routes = [
  {
    path: '',
    component: BimUsaServicesNewComponent,
  },
];

@NgModule({
  declarations: [
    BimUsaServicesNewComponent,
    BimUsaBannerComponent,
    BimUsaDrawingFreelancersComponent,
    BimUsaE2eEncryptionComponent,
    BimUsaFaqBuildtwinComponent,
    BimUsaHowItWorksNewComponent,
    BimUsaLiveTrackingNewComponent,
    BimUsaPlugPlayNewComponent,
    BimUsaPrecastServiceComponent,
    BimUsaSampleDrawingComponent,
    BimUsaServicesOfferedComponent,
    BimUsaThreeCardsComponent,
    BimUsaTopVendorsComponent,
    BimUsaTrustByNewComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    TrustByModule,
    RouterModule.forChild(routes),
  ],
})
export class BimUsaServicesNewModule { }
