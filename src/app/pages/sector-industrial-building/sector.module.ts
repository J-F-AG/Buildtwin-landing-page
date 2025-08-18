import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorIndustrialBuildingComponent } from './sector.component';
import { IndustrialBuildingFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { IndustrialBuildingHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { IndustrialBuildingSectorCategoryComponent } from './sector-category/service-category.component';
import { IndustrialBuildingTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
const routes: Routes = [
    {
        path: '',
        component: SectorIndustrialBuildingComponent,
    },
];

@NgModule({
    declarations: [
        SectorIndustrialBuildingComponent,
        IndustrialBuildingFaqBuildtwinComponent,
        IndustrialBuildingHdDiscoverProjectsComponent,
        IndustrialBuildingSectorCategoryComponent,
        IndustrialBuildingTtPartnersComponent,
    ],
    imports: [
        CommonModule,
        CarouselModule,
        HdNavbarModule,
        HdFooterModule,
        SharedModuleModule,
        HdGoodCompanyModule,
        ProjectListModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        SectorIndustrialBuildingComponent,
        IndustrialBuildingFaqBuildtwinComponent,
        IndustrialBuildingHdDiscoverProjectsComponent,
        IndustrialBuildingSectorCategoryComponent,
        IndustrialBuildingTtPartnersComponent,
    ]
})
export class SectorIndustrialBuildingModule { }
