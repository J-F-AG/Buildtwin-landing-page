import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { BuildingCodeISOComponent } from './sector.component';
import { FaqBuildtwinBuildingCodeISOComponent } from './faq-buildtwin/faq-buildtwin.component';
import { HdDiscoverProjectsBuildingCodeISOComponent } from './hd-discover-projects/hd-discover-projects.component';
import { HdServicesBuildingCodeISOoComponent } from './hd-services/hd-services.component';
import { SectorCategoryBuildingCodeISOComponent } from './sector-category/service-category.component';
import { TtPartnersBuildingCodeISOComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { HdServicesModule } from '../Home/hd-services/hd-services.module';
import { ServiceListModule } from 'src/app/include-component/service-list/service-list.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
const routes: Routes = [
    {
        path: '',
        component: BuildingCodeISOComponent,
    },
];

@NgModule({
    declarations: [
        BuildingCodeISOComponent,
        FaqBuildtwinBuildingCodeISOComponent,
        HdDiscoverProjectsBuildingCodeISOComponent,
        HdServicesBuildingCodeISOoComponent,
        SectorCategoryBuildingCodeISOComponent,
        TtPartnersBuildingCodeISOComponent,
    ],
    imports: [
        CommonModule,
        CarouselModule,
        HdNavbarModule,
        HdFooterModule,
        SharedModuleModule,
        HdGoodCompanyModule,
        HdServicesModule,
        ServiceListModule,
        ProjectListModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        BuildingCodeISOComponent,
        FaqBuildtwinBuildingCodeISOComponent,
        HdDiscoverProjectsBuildingCodeISOComponent,
        HdServicesBuildingCodeISOoComponent,
        SectorCategoryBuildingCodeISOComponent,
        TtPartnersBuildingCodeISOComponent,
    ]
})
export class BuildingCodeISOModule { }
