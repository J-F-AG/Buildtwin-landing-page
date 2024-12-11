import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { OnlineMeetingHomeFreelanceComponent } from './online-meeting-home-freelance.component';
import { OmBannerFreelanceComponent } from '../om-banner-freelance/om-banner-freelance.component';
import { OmAboutComponent } from '../om-about/om-about.component';
import { OmIntegrationsFreelanceComponent } from '../om-integrations-freelance/om-integrations-freelance.component';
import { TaskManagementBusinessIntelligenceComponent } from '../task-management-business-intelligence/task-management-business-intelligence.component';

const routes: Routes = [
  {
    path: '',
    component: OnlineMeetingHomeFreelanceComponent,
  },
];

@NgModule({
  declarations: [
    OnlineMeetingHomeFreelanceComponent,
    OmBannerFreelanceComponent,
    OmAboutComponent,
    OmIntegrationsFreelanceComponent,
    TaskManagementBusinessIntelligenceComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class OnlineMeetingHomeFreelanceModule { }
