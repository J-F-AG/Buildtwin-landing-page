import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { ServicesNewComponent } from './services-new.component';
import { BannerComponent } from './banner/banner.component';
import { E2eEncryptionComponent } from './e2e-encryption/e2e-encryption.component';
import { HowItWorksNewComponent } from './how-it-works/how-it-works.component';
import { LiveTrackingNewComponent } from './live-tracking/live-tracking.component';
import { PlugPlayNewComponent } from './plug-play/plug-play.component';
import { PrecastServiceComponent } from './precast-service/precast-service.component';
import { SampleDrawingComponent } from './sample-drawing/sample-drawing.component';
import { ServicesOfferedComponent } from './services-offered/services-offered.component';
import { ThreeCardsComponent } from './three-cards/three-cards.component';
import { TopVendorsComponent } from './top-vendors/top-vendors.component';
import { TrustByNewComponent } from './trust-by/trust-by.component';
import { TrustByModule } from '../bim/trust-by/trust-by.module';

const routes: Routes = [
  {
    path: '',
    component: ServicesNewComponent,
  },
];

@NgModule({
  declarations: [
    ServicesNewComponent,
    BannerComponent,
    E2eEncryptionComponent,
    HowItWorksNewComponent,
    LiveTrackingNewComponent,
    PlugPlayNewComponent,
    PrecastServiceComponent,
    SampleDrawingComponent,
    ServicesOfferedComponent,
    ThreeCardsComponent,
    TopVendorsComponent,
    TrustByNewComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    TrustByModule,
    RouterModule.forChild(routes),
  ],
})
export class ServicesNewModule { }
