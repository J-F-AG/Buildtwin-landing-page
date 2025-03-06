import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorHospitalComponent } from './sector.component';
import { HospitalFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { HospitalHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { HospitalSectorCategoryComponent } from './sector-category/service-category.component';
import { HospitalTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
const routes: Routes = [
    {
        path: '',
        component: SectorHospitalComponent,
    },
];

@NgModule({
    declarations: [
        SectorHospitalComponent,
        HospitalFaqBuildtwinComponent,
        HospitalHdDiscoverProjectsComponent,
        HospitalSectorCategoryComponent,
        HospitalTtPartnersComponent,
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
        SectorHospitalComponent,
        HospitalFaqBuildtwinComponent,
        HospitalHdDiscoverProjectsComponent,
        HospitalSectorCategoryComponent,
        HospitalTtPartnersComponent,
    ]
})
export class SectorHospitalModule { }
