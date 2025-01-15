import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { ElearningSchoolComponent } from './elearning-school.component';
import { ElearningBannerComponent } from '../elearning-banner/elearning-banner.component';
import { ElearningAboutComponent } from '../elearning-about/elearning-about.component';
import { ThreeColTraneeComponent } from '../three-col-tranee/three-col-tranee.component';
import { CoursesComponent } from '../courses/courses.component';
import { TraningCompanyComponent } from '../traning-company/traning-company.component';
import { PremiumAccessComponent } from '../premium-access/premium-access.component';

const routes: Routes = [
  {
    path: '',
    component: ElearningSchoolComponent,
  },
];

@NgModule({
  declarations: [
    ElearningSchoolComponent,
   ElearningBannerComponent,
   ElearningAboutComponent,
   ThreeColTraneeComponent,
   CoursesComponent,
   TraningCompanyComponent,
   PremiumAccessComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class ElearningSchoolModule { }
