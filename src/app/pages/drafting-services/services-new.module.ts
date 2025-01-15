import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { DraftingServicesNewComponent } from './services-new.component';
import { DraftingBannerComponent } from './banner/banner.component';
import { DraftingDrawingFreelancersComponent } from './drawing-freelancers/drawing-freelancers.component';
import { DraftingE2eEncryptionComponent } from './e2e-encryption/e2e-encryption.component';
import { DraftingFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { DraftingTrustByNewComponent } from './trust-by/trust-by.component';
import { DraftingTopVendorsComponent } from './top-vendors/top-vendors.component';
import { DraftingThreeCardsComponent } from './three-cards/three-cards.component';
import { DraftingServicesOfferedComponent } from './services-offered/services-offered.component';
import { DraftingSampleDrawingComponent } from './sample-drawing/sample-drawing.component';
import { DraftingPlugPlayNewComponent } from './plug-play/plug-play.component';
import { DraftingPrecastServiceComponent } from './precast-service/precast-service.component';
import { DraftingHowItWorksNewComponent } from './how-it-works/how-it-works.component';
import { DraftingLiveTrackingNewComponent } from './live-tracking/live-tracking.component';
import { TrustByModule } from '../bim/trust-by/trust-by.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { ServiceCategoryModule } from 'src/app/include-component/service-category/service-category.module';
const routes: Routes = [
    {
        path: '',
        component: DraftingServicesNewComponent,
    },
];

@NgModule({
    declarations: [
        DraftingServicesNewComponent,
        DraftingBannerComponent,
        DraftingDrawingFreelancersComponent,
        DraftingE2eEncryptionComponent,
        DraftingFaqBuildtwinComponent,
        DraftingHowItWorksNewComponent,
        DraftingLiveTrackingNewComponent,
        DraftingPlugPlayNewComponent,
        DraftingPrecastServiceComponent,
        DraftingSampleDrawingComponent,
        DraftingServicesOfferedComponent,
        DraftingThreeCardsComponent,
        DraftingTopVendorsComponent,
        DraftingTrustByNewComponent,
    ],
    imports: [
        CommonModule,
        CarouselModule,
        HdNavbarModule,
        HdFooterModule,
        TrustByModule,
        SharedModuleModule,
        ServiceCategoryModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        DraftingServicesNewComponent,
        DraftingBannerComponent,
        DraftingDrawingFreelancersComponent,
        DraftingE2eEncryptionComponent,
        DraftingFaqBuildtwinComponent,
        DraftingHowItWorksNewComponent,
        DraftingLiveTrackingNewComponent,
        DraftingPlugPlayNewComponent,
        DraftingPrecastServiceComponent,
        DraftingSampleDrawingComponent,
        DraftingServicesOfferedComponent,
        DraftingThreeCardsComponent,
        DraftingTopVendorsComponent,
        DraftingTrustByNewComponent,
    ]
})
export class DraftingServicesNewModule { }
