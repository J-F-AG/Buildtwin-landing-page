import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { BrowseServicesMainComponent } from './browse-services-main.component';
import { WhyBuildtwinComponent } from 'src/app/include-component/why-buildtwin/why-buildtwin.component';
import { HdServicesModule } from '../../Home/hd-services/hd-services.module';
import { HdIntegrationsModule } from '../../includes/hd-integrations/hd-integrations.module';
import { SoftwareListComponent } from 'src/app/include-component/software-list/software-list.component';
import { HdNavbarModule } from '../../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../../includes/hd-footer/hd-footer.module';

const routes: Routes = [
  {
    path: '',
    component: BrowseServicesMainComponent,
  },
];

@NgModule({
  declarations: [
    BrowseServicesMainComponent,
    WhyBuildtwinComponent,
    SoftwareListComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HdServicesModule,
    HdIntegrationsModule,
    HdNavbarModule,
        HdFooterModule,
    RouterModule.forChild(routes),
  ],
})
export class BrowseServicesMainModule { }
