import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { HdNavbarModule } from '../../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../../includes/hd-footer/hd-footer.module';
import { ArchitectureDesignServicesComponent } from './sector.component';
import { FaqBuildtwinArchitectureDesignServicesComponent } from './faq-buildtwin/faq-buildtwin.component';
import { HdDiscoverProjectsArchitectureDesignServicesComponent } from './hd-discover-projects/hd-discover-projects.component';
import { TtPartnersArchitectureDesignServicesComponent } from './tt-partners/tt-partners.component';
import { SpecialProjectArchitectureDesignServicesComponent } from './special-project/special-project.component';
import { SectorCategoryArchitectureDesignServicesComponent } from './sector-category/service-category.component';
import { HdServicesArchitectureDesignServicesComponent } from './hd-services/hd-services.component';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { HdGoodCompanyModule } from '../../Home/hd-good-company/hd-good-company.module';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { HdServicesModule } from '../../Home/hd-services/hd-services.module';
const routes: Routes = [
    {
        path: '',
        component: ArchitectureDesignServicesComponent,
    },
];

@NgModule({
    declarations: [

        ArchitectureDesignServicesComponent,
        FaqBuildtwinArchitectureDesignServicesComponent,
        HdDiscoverProjectsArchitectureDesignServicesComponent,
        HdServicesArchitectureDesignServicesComponent,
        SectorCategoryArchitectureDesignServicesComponent,
        SpecialProjectArchitectureDesignServicesComponent,
        TtPartnersArchitectureDesignServicesComponent,
    ],
    imports: [
        CommonModule,
        CarouselModule,
        HdNavbarModule,
        HdFooterModule,
        NzSkeletonModule,
        HdGoodCompanyModule,
        SharedModuleModule,
        HdServicesModule,
        RouterModule.forChild(routes),
    ],
    exports: [

        ArchitectureDesignServicesComponent,
        FaqBuildtwinArchitectureDesignServicesComponent,
        HdDiscoverProjectsArchitectureDesignServicesComponent,
        HdServicesArchitectureDesignServicesComponent,
        SectorCategoryArchitectureDesignServicesComponent,
        SpecialProjectArchitectureDesignServicesComponent,
        TtPartnersArchitectureDesignServicesComponent
    ]
})
export class ArchitectureDesignServicesModule { }
