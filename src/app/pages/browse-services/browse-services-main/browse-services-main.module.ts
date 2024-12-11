import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { BrowseServicesMainComponent } from './browse-services-main.component';
import { WhyBuildtwinComponent } from 'src/app/include-component/why-buildtwin/why-buildtwin.component';

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
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class BrowseServicesMainModule { }
