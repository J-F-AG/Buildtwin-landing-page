import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { DataCenterSectorComponent } from './sector.component';
import { DataCenterSpecialProjectComponent } from './special-project/special-project.component';
import { DataCenterTtPartnersComponent } from './tt-partners/tt-partners.component';
import { DataCenterHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { DataCenterSectorCategoryComponent } from './sector-category/service-category.component';
import { DataCenterFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
const routes: Routes = [
    {
        path: '',
        component: DataCenterSectorComponent,
    },
];

@NgModule({
    declarations: [
        DataCenterSectorComponent,
        DataCenterSpecialProjectComponent,
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
        RouterModule.forChild(routes),
    ],
    exports: [

        DataCenterSectorComponent,
        DataCenterSpecialProjectComponent,
        DataCenterTtPartnersComponent,
        DataCenterHdDiscoverProjectsComponent,
        DataCenterSectorCategoryComponent,
        //  DataCenterHdGoodCompanyComponent,
        DataCenterFaqBuildtwinComponent,
    ]
})
export class DataCenterSectorModule { }
