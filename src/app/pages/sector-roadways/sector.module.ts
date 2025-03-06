import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorRoadwaysComponent } from './sector.component';
import { RoadwaysFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { RoadwaysHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { RoadwaysSectorCategoryComponent } from './sector-category/service-category.component';
import { RoadwaysTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
const routes: Routes = [
    {
        path: '',
        component: SectorRoadwaysComponent,
    },
];

@NgModule({
    declarations: [
        SectorRoadwaysComponent,
        RoadwaysFaqBuildtwinComponent,
        RoadwaysHdDiscoverProjectsComponent,
        RoadwaysSectorCategoryComponent,
        RoadwaysTtPartnersComponent,
    ],
    imports: [
        CommonModule,
        CarouselModule,
        HdNavbarModule,
        HdFooterModule,
        SharedModuleModule,
        HdGoodCompanyModule,
        RouterModule.forChild(routes),
    ],
    exports: [
        SectorRoadwaysComponent,
        RoadwaysFaqBuildtwinComponent,
        RoadwaysHdDiscoverProjectsComponent,
        RoadwaysSectorCategoryComponent,
        RoadwaysTtPartnersComponent,
    ]
})
export class SectorRoadwaysModule { }
