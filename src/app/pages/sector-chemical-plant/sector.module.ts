import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../includes/hd-footer/hd-footer.module';
import { SectorChemicalPlantComponent } from './sector.component';
import { ChemicalPlantFaqBuildtwinComponent } from './faq-buildtwin/faq-buildtwin.component';
import { ChemicalPlantHdDiscoverProjectsComponent } from './hd-discover-projects/hd-discover-projects.component';
import { ChemicalPlantSectorCategoryComponent } from './sector-category/service-category.component';
import { ChemicalPlantTtPartnersComponent } from './tt-partners/tt-partners.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../Home/hd-good-company/hd-good-company.module';
import { ProjectListModule } from 'src/app/include-component/project-list/project-list.module';
const routes: Routes = [
    {
        path: '',
        component: SectorChemicalPlantComponent,
    },
];

@NgModule({
    declarations: [
        SectorChemicalPlantComponent,
        ChemicalPlantFaqBuildtwinComponent,
        ChemicalPlantHdDiscoverProjectsComponent,
        ChemicalPlantSectorCategoryComponent,
        ChemicalPlantTtPartnersComponent,
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
        SectorChemicalPlantComponent,
        ChemicalPlantFaqBuildtwinComponent,
        ChemicalPlantHdDiscoverProjectsComponent,
        ChemicalPlantSectorCategoryComponent,
        ChemicalPlantTtPartnersComponent,
    ]
})
export class SectorChemicalPlantModule { }
