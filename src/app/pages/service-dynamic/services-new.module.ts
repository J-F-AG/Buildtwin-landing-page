import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';

import { ServiceDynamicComponent } from './services-new.component';
import { RebarTrustByNewComponent } from './trust-by/trust-by.component';
import { RebarSampleDrawingComponent } from './sample-drawing/sample-drawing.component';
import { RebarPrecastServiceComponent } from './precast-service/precast-service.component';
import { RebarE2eEncryptionComponent } from './e2e-encryption/e2e-encryption.component';
import { RebarBannerComponent } from './banner/banner.component';
import { RebarDrawingFreelancersComponent } from './drawing-freelancers/drawing-freelancers.component';
import { RebarFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { GoodReasonComponent } from './good-reason/good-reason.component';
import { GreateVendorComponent } from './greate-vendor/greate-vendor.component';
import { QualityManagementComponent } from './quality-management/quality-management.component';
import { ServiceHeavyLiftingModule } from './service-heavy-lifting/service-heavy-lifting.module';

import { TrustByModule } from './trust-by-items/trust-by.module';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { CompanyLogosSliderModule } from '../Home/company-logos-slider/company-logos-slider.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
import { SpecialProjectModule } from 'src/app/include-component/special-project/special-project.module';
import { TtTestimonialsModule } from '../marketplace/marketPlace/tt-testimonials/tt-testimonials.module';
import { HdIntegrationsModule } from '../includes/hd-integrations/hd-integrations.module';

const routes: Routes = [
  {
    path: '',
    component: ServiceDynamicComponent,
  },
];

@NgModule({
  declarations: [
    ServiceDynamicComponent,
    RebarBannerComponent,
    RebarDrawingFreelancersComponent,
    RebarE2eEncryptionComponent,
    RebarFaqBuildtwinComponent,
    RebarPrecastServiceComponent,
    RebarSampleDrawingComponent,
    RebarTrustByNewComponent,
    GoodReasonComponent,
    GreateVendorComponent,
    QualityManagementComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    TrustByModule,
        HdNavbarModule,
        HdFooterModule,
        ProjectListModule,
        SpecialProjectModule,
        CompanyLogosSliderModule,
        TtTestimonialsModule,
        ServiceHeavyLiftingModule,
        HdIntegrationsModule,
    RouterModule.forChild(routes),
  ],
})
export class ServiceDynamicModule { }
