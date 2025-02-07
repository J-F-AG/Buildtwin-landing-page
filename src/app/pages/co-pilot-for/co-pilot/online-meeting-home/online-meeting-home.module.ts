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
import { HdNavbarModule } from 'src/app/pages/includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from 'src/app/pages/includes/hd-footer/hd-footer.module';
import { AiProjectManagementHeroComponent } from '../ai-project-management-hero/ai-project-management-hero.component';
import { Style3Module } from 'src/app/pages/style3/style3.module';

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
    HdFaqComponent,
    AiProjectManagementHeroComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HdNavbarModule,
    HdFooterModule,
    Style3Module,
    RouterModule.forChild(routes),
  ],
})
export class OnlineMeetingHomeModule { }
