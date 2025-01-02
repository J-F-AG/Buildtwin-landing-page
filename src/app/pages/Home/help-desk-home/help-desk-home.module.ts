import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HelpDeskHomeComponent } from './help-desk-home.component';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdBannerNewModule } from '../hd-banner-new/hd-banner-new.module';
import { HdNavbarModule } from '../../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../../includes/hd-footer/hd-footer.module';
import { HdGoodCompanyModule } from '../hd-good-company/hd-good-company.module';
import { HdTestimonialsModule } from '../hd-testimonials/hd-testimonials.module';
import { HdIntegrationsModule } from '../../includes/hd-integrations/hd-integrations.module';
import { HdWhyBuildtwinModule } from '../hd-why-buildtwin/hd-why-buildtwin.module';
import { HdDiscoverProjectsModule } from '../hd-discover-projects/hd-discover-projects.module';
import { HdProvidersModule } from '../hd-providers/hd-providers.module';
import { HdServicesModule } from '../hd-services/hd-services.module';

const routes: Routes = [
  {
    path: '',
    component: HelpDeskHomeComponent,
  },
];

@NgModule({
  declarations: [
    HelpDeskHomeComponent
  ],
  imports: [
    CommonModule,
    CarouselModule,
    HdNavbarModule,
    HdBannerNewModule,
    HdFooterModule,
    HdServicesModule,
    HdProvidersModule,
    HdDiscoverProjectsModule,
    HdWhyBuildtwinModule,
    HdIntegrationsModule,
    HdTestimonialsModule,
    HdGoodCompanyModule,
    RouterModule.forChild(routes),
  ],
})
export class HelpDeskHomeModule { }
