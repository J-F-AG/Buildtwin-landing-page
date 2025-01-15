import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { BrowseServicesMainComponent } from './browse-services-main.component';
import { WhyBuildtwinComponent } from 'src/app/include-component/why-buildtwin/why-buildtwin.component';
import { HdServicesModule } from '../../Home/hd-services/hd-services.module';
import { HdIntegrationsModule } from '../../includes/hd-integrations/hd-integrations.module';
import { SoftwareListComponent } from 'src/app/include-component/software-list/software-list.component';

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
    RouterModule.forChild(routes),
  ],
})
export class BrowseServicesMainModule { }
