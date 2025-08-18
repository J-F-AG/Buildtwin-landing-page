import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { AboutPageComponent } from './about-page.component';
import { AboutLorenzComponent } from './about-lorenz/about-lorenz.component';
import { EmFunfactsComponent } from './em-funfacts/em-funfacts.component';
import { EmWhyChooseUsComponent } from './em-why-choose-us/em-why-choose-us.component';
import { TraningReviewComponent } from './traning-review/traning-review.component';
import { HdNavbarModule } from '../../includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from '../../includes/hd-footer/hd-footer.module';
// import { TraningReviewComponent } from './traning-review/traning-review.component';

const routes: Routes = [
  {
    path: '',
    component: AboutPageComponent,
  },
];

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutLorenzComponent,
    EmFunfactsComponent,
    EmWhyChooseUsComponent,
    // TraningReviewComponent
    TraningReviewComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
        HdNavbarModule,
        HdFooterModule,
    RouterModule.forChild(routes),
  ],
})
export class AboutPageModule { }
