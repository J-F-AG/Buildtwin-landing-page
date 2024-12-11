import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpDeskHomeComponent } from './help-desk-home.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdBannerNewComponent } from '../hd-banner-new/hd-banner-new.component';
import { HdProvidersComponent } from '../hd-providers/hd-providers.component';
import { HdWhyBuildtwinComponent } from '../hd-why-buildtwin/hd-why-buildtwin.component';
import { HdTestimonialsComponent } from '../hd-testimonials/hd-testimonials.component';

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
