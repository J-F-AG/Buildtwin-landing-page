import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorWaterAndWasteComponent } from './sector.component';
import { WaterAndWasteFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { WaterAndWasteHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { WaterAndWasteSectorCategoryComponent } from './sector-category/service-category.component';
import { WaterAndWasteTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
const routes: Routes = [
    {
        path: '',
        component: SectorWaterAndWasteComponent,
    },
];

@NgModule({
    declarations: [
        SectorWaterAndWasteComponent,
        WaterAndWasteFaqBuildtwinComponent,
        WaterAndWasteHdDiscoverProjectsComponent,
        WaterAndWasteSectorCategoryComponent,
        WaterAndWasteTtPartnersComponent,
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
        SectorWaterAndWasteComponent,
        WaterAndWasteFaqBuildtwinComponent,
        WaterAndWasteHdDiscoverProjectsComponent,
        WaterAndWasteSectorCategoryComponent,
        WaterAndWasteTtPartnersComponent,
    ]
})
export class SectorWaterAndWasteModule { }
