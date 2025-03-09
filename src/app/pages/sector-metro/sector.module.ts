import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorMetroComponent } from './sector.component';
import { MetroFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { MetroHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { MetroPlantSectorCategoryComponent } from './sector-category/service-category.component';
import { MetroTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
const routes: Routes = [
    {
        path: '',
        component: SectorMetroComponent,
    },
];

@NgModule({
    declarations: [
        SectorMetroComponent,
        MetroFaqBuildtwinComponent,
        MetroHdDiscoverProjectsComponent,
        MetroPlantSectorCategoryComponent,
        MetroTtPartnersComponent,
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
        SectorMetroComponent,
        MetroFaqBuildtwinComponent,
        MetroHdDiscoverProjectsComponent,
        MetroPlantSectorCategoryComponent,
        MetroTtPartnersComponent,
    ]
})
export class SectorMetroModule { }
