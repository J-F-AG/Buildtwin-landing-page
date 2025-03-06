import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorStadiumComponent } from './sector.component';
import { StadiumFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { StadiumHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { StadiumSectorCategoryComponent } from './sector-category/service-category.component';
import { StadiumTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
const routes: Routes = [
    {
        path: '',
        component: SectorStadiumComponent,
    },
];

@NgModule({
    declarations: [
        SectorStadiumComponent,
        StadiumFaqBuildtwinComponent,
        StadiumHdDiscoverProjectsComponent,
        StadiumSectorCategoryComponent,
        StadiumTtPartnersComponent,
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
        SectorStadiumComponent,
        StadiumFaqBuildtwinComponent,
        StadiumHdDiscoverProjectsComponent,
        StadiumSectorCategoryComponent,
        StadiumTtPartnersComponent,
    ]
})
export class SectorStadiumModule { }
