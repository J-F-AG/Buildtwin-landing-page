import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HowItWorksComponent } from './how-it-works.component';
import { TtBannerComponent } from '../tt-banner/tt-banner.component';
import { TtTestimonialsModule } from '../tt-testimonials/tt-testimonials.module';
import { TtServicesComponent } from '../tt-services/tt-services.component';
import { TtAboutComponent } from '../tt-about/tt-about.component';
import { TtFaqComponent } from '../tt-faq/tt-faq.component';
import { SocialsMediaInfoComponent } from '../socials-media-info/socials-media-info.component';
import { HdIntegrationsModule } from 'src/app/pages/includes/hd-integrations/hd-integrations.module';
import { HdNavbarModule } from 'src/app/pages/includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from 'src/app/pages/includes/hd-footer/hd-footer.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
import { HIWCtaComponent } from '../hiwcta/hiwcta.component';
import { EmFaqModule } from 'src/app/pages/includes/em-faq/em-faq.module';

const routes: Routes = [
  {
    path: '',
    component: HowItWorksComponent,
  },
];

@NgModule({
  declarations: [
    HowItWorksComponent,
    TtBannerComponent,
    TtServicesComponent,
    TtAboutComponent,
    TtFaqComponent,
    SocialsMediaInfoComponent,
    HIWCtaComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HdIntegrationsModule,
    HdNavbarModule,
    HdFooterModule,
    ProjectListModule,
    TtTestimonialsModule,
    EmFaqModule,
    RouterModule.forChild(routes),
  ],
})
export class HowItWorksModule { }
