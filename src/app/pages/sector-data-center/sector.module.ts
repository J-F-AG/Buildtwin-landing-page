import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { DataCenterSectorComponent } from './sector.component';
import { DataCenterTtPartnersComponent } from './tt-partners/tt-partners.component';
import { DataCenterHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { DataCenterSectorCategoryComponent } from './sector-category/service-category.component';
import { DataCenterFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
const routes: Routes = [
    {
        path: '',
        component: DataCenterSectorComponent,
    },
];

@NgModule({
    declarations: [
        DataCenterSectorComponent,
        DataCenterTtPartnersComponent,
        DataCenterHdDiscoverProjectsComponent,
        DataCenterSectorCategoryComponent,
        //  DataCenterHdGoodCompanyComponent,
        DataCenterFaqBuildtwinComponent,
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

        DataCenterSectorComponent,
        DataCenterTtPartnersComponent,
        DataCenterHdDiscoverProjectsComponent,
        DataCenterSectorCategoryComponent,
        //  DataCenterHdGoodCompanyComponent,
        DataCenterFaqBuildtwinComponent,
    ]
})
export class DataCenterSectorModule { }
