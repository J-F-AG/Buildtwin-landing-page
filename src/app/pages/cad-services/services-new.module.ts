import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { CadServicesNewComponent } from './services-new.component';
import { ServiceCategoryModule } from 'src/app/include-component/service-category/service-category.module';
import { CadBannerComponent } from './banner/banner.component';
import { CadDrawingFreelancersComponent } from './drawing-freelancers/drawing-freelancers.component';
import { CadE2eEncryptionComponent } from './e2e-encryption/e2e-encryption.component';
import { CadFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { CadHowItWorksNewComponent } from './how-it-works/how-it-works.component';
import { CadLiveTrackingNewComponent } from './live-tracking/live-tracking.component';
import { CadPlugPlayNewComponent } from './plug-play/plug-play.component';
import { CadServiceComponent } from './cad-service/cad-service.component';
import { CadSampleDrawingComponent } from './sample-drawing/sample-drawing.component';
import { CadServicesOfferedComponent } from './services-offered/services-offered.component';
import { CadThreeCardsComponent } from './three-cards/three-cards.component';
import { CadTopVendorsComponent } from './top-vendors/top-vendors.component';
import { CadTrustByNewComponent } from './trust-by/trust-by.component';
import { TrustByModule } from '../bim/trust-by/trust-by.module';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';

const routes: Routes = [
  {
    path: '',
    component: CadServicesNewComponent,
  },
];

@NgModule({
  declarations: [
    CadServicesNewComponent,
    CadBannerComponent,
    CadDrawingFreelancersComponent,
    CadE2eEncryptionComponent,
    CadFaqBuildtwinComponent,
    CadHowItWorksNewComponent,
    CadLiveTrackingNewComponent,
    CadPlugPlayNewComponent,
    CadServiceComponent,
    CadSampleDrawingComponent,
    CadServicesOfferedComponent,
    CadThreeCardsComponent,
    CadTopVendorsComponent,
    CadTrustByNewComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    ServiceCategoryModule,
    TrustByModule,
        HdNavbarModule,
        HdFooterModule,
    RouterModule.forChild(routes),
  ],
})
export class CadServicesNewModule { }
