import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../../includes/hd-footer/hd-footer.module';
import { StructuralSteelDetailingSoftwareComponent } from './sector.component';
import { FaqBuildtwinStructuralSteelDetailingSoftwareComponent } from './faq-buildtwin/faq-buildtwin.component';
import { HdDiscoverProjectsStructuralSteelDetailingSoftwareComponent } from './hd-discover-projects/hd-discover-projects.component';
import { TtPartnersStructuralSteelDetailingSoftwareComponent } from './tt-partners/tt-partners.component';
import { SpecialProjectStructuralSteelDetailingSoftwareComponent } from './special-project/special-project.component';
import { SectorCategoryStructuralSteelDetailingSoftwareComponent } from './sector-category/service-category.component';
import { HdServicesStructuralSteelDetailingSoftwareComponent } from './hd-services/hd-services.component';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdGoodCompanyModule } from '../../Home/hd-good-company/hd-good-company.module';
import { HdServicesModule } from '../../Home/hd-services/hd-services.module';
const routes: Routes = [
    {
        path: '',
        component: StructuralSteelDetailingSoftwareComponent,
    },
];

@NgModule({
    declarations: [

        StructuralSteelDetailingSoftwareComponent,
        FaqBuildtwinStructuralSteelDetailingSoftwareComponent,
        HdDiscoverProjectsStructuralSteelDetailingSoftwareComponent,
        HdServicesStructuralSteelDetailingSoftwareComponent,
        SectorCategoryStructuralSteelDetailingSoftwareComponent,
        SpecialProjectStructuralSteelDetailingSoftwareComponent,
        TtPartnersStructuralSteelDetailingSoftwareComponent,
    ],
    imports: [
        CommonModule,
        CarouselModule,
        HdNavbarModule,
        HdFooterModule,
        SharedModuleModule,
        HdGoodCompanyModule,
        HdServicesModule,
        RouterModule.forChild(routes),
    ],
    exports: [

        StructuralSteelDetailingSoftwareComponent,
        FaqBuildtwinStructuralSteelDetailingSoftwareComponent,
        HdDiscoverProjectsStructuralSteelDetailingSoftwareComponent,
        HdServicesStructuralSteelDetailingSoftwareComponent,
        SectorCategoryStructuralSteelDetailingSoftwareComponent,
        SpecialProjectStructuralSteelDetailingSoftwareComponent,
        TtPartnersStructuralSteelDetailingSoftwareComponent,
    ]
})
export class StructuralSteelDetailingSoftwareModule { }
