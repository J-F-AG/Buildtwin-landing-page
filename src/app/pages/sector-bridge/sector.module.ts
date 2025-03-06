import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorBridgeComponent } from './sector.component';
import { BridgeFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { BridgeHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { BridgeSectorCategoryComponent } from './sector-category/service-category.component';
import { BridgeTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
const routes: Routes = [
    {
        path: '',
        component: SectorBridgeComponent,
    },
];

@NgModule({
    declarations: [
        SectorBridgeComponent,
        BridgeFaqBuildtwinComponent,
        BridgeHdDiscoverProjectsComponent,
        BridgeSectorCategoryComponent,
        BridgeTtPartnersComponent,
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
        SectorBridgeComponent,
        BridgeFaqBuildtwinComponent,
        BridgeHdDiscoverProjectsComponent,
        BridgeSectorCategoryComponent,
        BridgeTtPartnersComponent,
    ]
})
export class SectorBridgeModule { }
