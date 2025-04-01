import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { BuildingCodeASComponent } from './sector.component';
import { FaqBuildtwinBuildingCodeASComponent } from './faq-buildtwin/faq-buildtwin.component';
import { HdDiscoverProjectsBuildingCodeASComponent } from './hd-discover-projects/hd-discover-projects.component';
import { HdServicesBuildingCodeASComponent } from './hd-services/hd-services.component';
import { SectorCategoryBuildingCodeASComponent } from './sector-category/service-category.component';
import { TtPartnersBuildingCodeASComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { HdServicesModule } from '../Home/hd-services/hd-services.module';
import { ServiceListModule } from 'src/app/include-component/service-list/service-list.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
const routes: Routes = [
    {
        path: '',
        component: BuildingCodeASComponent,
    },
];

@NgModule({
    declarations: [
        BuildingCodeASComponent,
        FaqBuildtwinBuildingCodeASComponent,
        HdDiscoverProjectsBuildingCodeASComponent,
        HdServicesBuildingCodeASComponent,
        SectorCategoryBuildingCodeASComponent,
        TtPartnersBuildingCodeASComponent,
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
        BuildingCodeASComponent,
        FaqBuildtwinBuildingCodeASComponent,
        HdDiscoverProjectsBuildingCodeASComponent,
        HdServicesBuildingCodeASComponent,
        SectorCategoryBuildingCodeASComponent,
        TtPartnersBuildingCodeASComponent,
    ]
})
export class BuildingCodeASModule { }
