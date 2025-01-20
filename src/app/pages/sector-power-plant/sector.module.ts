import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorPowerPlantComponent } from './sector.component';
import { PowerPlantFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { PowerPlantHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { PowerPlantSectorCategoryComponent } from './sector-category/service-category.component';
import { PowerPlantTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
const routes: Routes = [
    {
        path: '',
        component: SectorPowerPlantComponent,
    },
];

@NgModule({
    declarations: [
        SectorPowerPlantComponent,
        PowerPlantFaqBuildtwinComponent,
        PowerPlantHdDiscoverProjectsComponent,
        PowerPlantSectorCategoryComponent,
        PowerPlantTtPartnersComponent,
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
        SectorPowerPlantComponent,
        PowerPlantFaqBuildtwinComponent,
        PowerPlantHdDiscoverProjectsComponent,
        PowerPlantSectorCategoryComponent,
        PowerPlantTtPartnersComponent,
    ]
})
export class SectorPowerPlantModule { }
