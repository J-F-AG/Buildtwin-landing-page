import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorTheatersComponent } from './sector.component';
import { TheatersFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { TheatersHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { TheatersSectorCategoryComponent } from './sector-category/service-category.component';
import { TheatersTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
const routes: Routes = [
    {
        path: '',
        component: SectorTheatersComponent,
    },
];

@NgModule({
    declarations: [
        SectorTheatersComponent,
        TheatersFaqBuildtwinComponent,
        TheatersHdDiscoverProjectsComponent,
        TheatersSectorCategoryComponent,
        TheatersTtPartnersComponent,
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
        SectorTheatersComponent,
        TheatersFaqBuildtwinComponent,
        TheatersHdDiscoverProjectsComponent,
        TheatersSectorCategoryComponent,
        TheatersTtPartnersComponent,
    ]
})
export class SectorTheatersModule { }
