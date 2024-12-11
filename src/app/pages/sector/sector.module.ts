import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { SectorComponent } from './sector.component';
import { DataCenterSectionComponent } from './data-center-section/data-center-section.component';
import { sectorMeetingStandardsComponent } from './meeting-standards/meeting-standards.component';
import { DcEuropeComponent } from './dc-europe/dc-europe.component';
import { SectorCategoryComponent } from 'src/app/include-component/sector-category/service-category.component';
import { GetStartedComponent } from './get-started/get-started.component';

const routes: Routes = [
  {
    path: '',
    component: SectorComponent,
  },
];

@NgModule({
  declarations: [
    SectorComponent,
    DataCenterSectionComponent,
    sectorMeetingStandardsComponent,
    DcEuropeComponent,
    SectorCategoryComponent,
    GetStartedComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class SectorModule { }
