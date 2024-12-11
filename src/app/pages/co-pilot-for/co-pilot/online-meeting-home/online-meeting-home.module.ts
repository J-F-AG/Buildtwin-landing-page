import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { OnlineMeetingHomeComponent } from './online-meeting-home.component';
import { OmBannerComponent } from '../om-banner/om-banner.component';
import { OmIntegrationsComponent } from '../om-integrations/om-integrations.component';
import { SignupComponentComponent } from '../signup-component/signup-component.component';
import { OmWhyChooseUsComponent } from '../om-why-choose-us/om-why-choose-us.component';
import { HdFaqComponent } from '../hd-faq/hd-faq.component';
import { OmBannerFooterComponent } from '../om-banner/om-banner-footer/om-banner-footer.component';

const routes: Routes = [
  {
    path: '',
    component: OnlineMeetingHomeComponent,
  },
];

@NgModule({
  declarations: [
    OnlineMeetingHomeComponent,
    OmBannerComponent,
    OmBannerFooterComponent,
    OmIntegrationsComponent,
    SignupComponentComponent,
    OmWhyChooseUsComponent,
    HdFaqComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class OnlineMeetingHomeModule { }
