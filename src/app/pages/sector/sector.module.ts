import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { SectorComponent } from './sector.component';
import { DataCenterSectionComponent } from './data-center-section/data-center-section.component';
import { sectorMeetingStandardsComponent } from './meeting-standards/meeting-standards.component';
import { DcEuropeComponent } from './dc-europe/dc-europe.component';
import { SectorCategoryComponent } from 'src/app/include-component/sector-category/service-category.component';
import { GetStartedComponent } from './get-started/get-started.component';
import { HdDiscoverProjectsModule } from '../Home/hd-discover-projects/hd-discover-projects.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { HdIntegrationsModule } from '../includes/hd-integrations/hd-integrations.module';
import { HdDiscoverProjectsSectorModule } from './hd-discover-projects/hd-discover-projects.module';
import { TtPartnersSectorComponent } from './tt-partners/tt-partners.component';
import { SpecialProjectSectorComponent } from './special-project/special-project.component';
import { SectorCategorySectorComponent } from './sector-category/service-category.component';
import { FaqBuildtwinSectorComponent } from './faq-buildtwin/faq-buildtwin.component';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
// import { SectorCategorySectorComponent } from './sector-category/service-category.component';

const routes: Routes = [
  {
    path: '',
    component: SectorComponent,
  },
];

@NgModule({
  declarations: [
    SectorComponent,
    DataCenterSectionComponent,
    sectorMeetingStandardsComponent,
    DcEuropeComponent,
    SectorCategoryComponent,
    GetStartedComponent,
    TtPartnersSectorComponent,
    SpecialProjectSectorComponent,
    SectorCategorySectorComponent,
    FaqBuildtwinSectorComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HdDiscoverProjectsModule,
    HdGoodCompanyModule,
    HdIntegrationsModule,
    HdDiscoverProjectsSectorModule,
        HdNavbarModule,
        HdFooterModule,
    RouterModule.forChild(routes),
  ],
})
export class SectorModule { }
