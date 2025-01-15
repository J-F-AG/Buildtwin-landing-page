import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { SteelDetailingUsaServicesNewComponent } from './services-new.component';
import { SteelDetailingUsaBannerComponent } from './banner/banner.component';
import { SteelDetailingUsaDrawingFreelancersComponent } from './drawing-freelancers/drawing-freelancers.component';
import { SteelDetailingUsaE2eEncryptionComponent } from './e2e-encryption/e2e-encryption.component';
import { SteelDetailingUsaFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { SteelDetailingUsaHowItWorksNewComponent } from './how-it-works/how-it-works.component';
import { SteelDetailingUsaLiveTrackingNewComponent } from './live-tracking/live-tracking.component';
import { SteelDetailingUsaPlugPlayNewComponent } from './plug-play/plug-play.component';
import { SteelDetailingUsaPrecastServiceComponent } from './precast-service/precast-service.component';
import { SteelDetailingUsaSampleDrawingComponent } from './sample-drawing/sample-drawing.component';
import { SteelDetailingUsaServicesOfferedComponent } from './services-offered/services-offered.component';
import { SteelDetailingUsaThreeCardsComponent } from './three-cards/three-cards.component';
import { SteelDetailingUsaTopVendorsComponent } from './top-vendors/top-vendors.component';
import { SteelDetailingUsaTrustByNewComponent } from './trust-by/trust-by.component';
import { ServiceCategoryModule } from 'src/app/include-component/service-category/service-category.module';
import { TrustByModule } from '../bim/trust-by/trust-by.module';

const routes: Routes = [
  {
    path: '',
    component: SteelDetailingUsaServicesNewComponent,
  },
];

@NgModule({
  declarations: [
    SteelDetailingUsaServicesNewComponent,
    SteelDetailingUsaBannerComponent,
    SteelDetailingUsaDrawingFreelancersComponent,
    SteelDetailingUsaE2eEncryptionComponent,
    SteelDetailingUsaFaqBuildtwinComponent,
    SteelDetailingUsaHowItWorksNewComponent,
    SteelDetailingUsaLiveTrackingNewComponent,
    SteelDetailingUsaPlugPlayNewComponent,
    SteelDetailingUsaPrecastServiceComponent,
    SteelDetailingUsaSampleDrawingComponent,
    SteelDetailingUsaServicesOfferedComponent,
    SteelDetailingUsaThreeCardsComponent,
    SteelDetailingUsaTopVendorsComponent,
    SteelDetailingUsaTrustByNewComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    ServiceCategoryModule,
    TrustByModule,
    RouterModule.forChild(routes),
  ],
})
export class SteelDetailingUsaServicesNewModule { }
