import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BuildingCodeAiscComponent } from './sector.component';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { FaqBuildtwinBuildingCodeAiscComponent } from './faq-buildtwin/faq-buildtwin.component';
import { HdDiscoverProjectsBuildingCodeAiscComponent } from './hd-discover-projects/hd-discover-projects.component';
import { HdServicesBuildingCodeAiscComponent } from './hd-services/hd-services.component';
import { SectorCategoryBuildingCodeAiscComponent } from './sector-category/service-category.component';
import { TtPartnersBuildingCodeAiscComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { HdServicesModule } from '../Home/hd-services/hd-services.module';
const routes: Routes = [
    {
        path: '',
        component: BuildingCodeAiscComponent,
    },
];

@NgModule({
    declarations: [
        BuildingCodeAiscComponent,
        FaqBuildtwinBuildingCodeAiscComponent,
        HdDiscoverProjectsBuildingCodeAiscComponent,
        HdServicesBuildingCodeAiscComponent,
        SectorCategoryBuildingCodeAiscComponent,
        TtPartnersBuildingCodeAiscComponent,
    ],
    imports: [
        CommonModule,
        CarouselModule,
        HdNavbarModule,
        HdFooterModule,
        SharedModuleModule,
        HdGoodCompanyModule,
        HdServicesModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        BuildingCodeAiscComponent,
        FaqBuildtwinBuildingCodeAiscComponent,
        HdDiscoverProjectsBuildingCodeAiscComponent,
        HdServicesBuildingCodeAiscComponent,
        SectorCategoryBuildingCodeAiscComponent,
        TtPartnersBuildingCodeAiscComponent,
    ]
})
export class BuildingCodeAiscModule { }
