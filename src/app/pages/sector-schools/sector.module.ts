import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorSchoolsComponent } from './sector.component';
import { SchoolsFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { SchoolsHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { SchoolsPlantSectorCategoryComponent } from './sector-category/service-category.component';
import { SchoolsTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
const routes: Routes = [
    {
        path: '',
        component: SectorSchoolsComponent,
    },
];

@NgModule({
    declarations: [
        SectorSchoolsComponent,
        SchoolsFaqBuildtwinComponent,
        SchoolsHdDiscoverProjectsComponent,
        SchoolsPlantSectorCategoryComponent,
        SchoolsTtPartnersComponent,
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
        SectorSchoolsComponent,
        SchoolsFaqBuildtwinComponent,
        SchoolsHdDiscoverProjectsComponent,
        SchoolsPlantSectorCategoryComponent,
        SchoolsTtPartnersComponent,
    ]
})
export class SectorSchoolsModule { }
