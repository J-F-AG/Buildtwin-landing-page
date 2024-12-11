import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpDeskHomeComponent } from './help-desk-home.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdBannerNewComponent } from '../hd-banner-new/hd-banner-new.component';
import { HdProvidersComponent } from '../hd-providers/hd-providers.component';
import { HdWhyBuildtwinComponent } from '../hd-why-buildtwin/hd-why-buildtwin.component';
import { HdTestimonialsComponent } from '../hd-testimonials/hd-testimonials.component';
import { HdServicesModule } from '../hd-services/hd-services.module';
import { HdDiscoverProjectsModule } from '../hd-discover-projects/hd-discover-projects.module';
import { HdGoodCompanyModule } from '../hd-good-company/hd-good-company.module';
import { HdIntegrationsModule } from '../../includes/hd-integrations/hd-integrations.module';

const routes: Routes = [
  {
    path: '',
    component: HelpDeskHomeComponent,
  },
];

@NgModule({
  declarations: [
    HelpDeskHomeComponent,
    HdBannerNewComponent,
    HdProvidersComponent,
    HdWhyBuildtwinComponent,
    HdTestimonialsComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HdServicesModule,
    HdDiscoverProjectsModule,
    HdGoodCompanyModule,
    HdIntegrationsModule,
    RouterModule.forChild(routes),
  ],
  // exports: [
  //   RouterModule,
  //   HdBannerNewComponent,
  //   HdProvidersComponent,
  //   HdWhyBuildtwinComponent,
  //   HdTestimonialsComponent
  // ],
})
export class HelpDeskHomeModule { }
