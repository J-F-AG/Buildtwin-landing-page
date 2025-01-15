import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { StructuralSteelServicesNewComponent } from './services-new.component';
import { StructuralSteelBannerComponent } from './banner/banner.component';
import { StructuralSteelDrawingFreelancersComponent } from './drawing-freelancers/drawing-freelancers.component';
import { StructuralSteelE2eEncryptionComponent } from './e2e-encryption/e2e-encryption.component';
import { StructuralSteelFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { StructuralSteelHowItWorksNewComponent } from './how-it-works/how-it-works.component';
import { StructuralSteelLiveTrackingNewComponent } from './live-tracking/live-tracking.component';
import { StructuralSteelPlugPlayNewComponent } from './plug-play/plug-play.component';
import { StructuralSteelPrecastServiceComponent } from './precast-service/precast-service.component';
import { StructuralSteelSampleDrawingComponent } from './sample-drawing/sample-drawing.component';
import { StructuralSteelServicesOfferedComponent } from './services-offered/services-offered.component';
import { StructuralSteelThreeCardsComponent } from './three-cards/three-cards.component';
import { StructuralSteelTopVendorsComponent } from './top-vendors/top-vendors.component';
import { StructuralSteelTrustByNewComponent } from './trust-by/trust-by.component';
import { ServiceCategoryModule } from 'src/app/include-component/service-category/service-category.module';
import { TrustByModule } from '../bim/trust-by/trust-by.module';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';

const routes: Routes = [
  {
    path: '',
    component: StructuralSteelServicesNewComponent,
  },
];

@NgModule({
  declarations: [
    StructuralSteelServicesNewComponent,
    StructuralSteelBannerComponent,
    StructuralSteelDrawingFreelancersComponent,
    StructuralSteelE2eEncryptionComponent,
    StructuralSteelFaqBuildtwinComponent,
    StructuralSteelHowItWorksNewComponent,
    StructuralSteelLiveTrackingNewComponent,
    StructuralSteelPlugPlayNewComponent,
    StructuralSteelPrecastServiceComponent,
    StructuralSteelSampleDrawingComponent,
    StructuralSteelServicesOfferedComponent,
    StructuralSteelThreeCardsComponent,
    StructuralSteelTopVendorsComponent,
    StructuralSteelTrustByNewComponent,
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
export class StructuralSteelServicesNewModule { }
