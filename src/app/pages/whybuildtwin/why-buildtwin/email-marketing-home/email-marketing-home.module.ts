import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { EmailMarketingHomeComponent } from './email-marketing-home.component';
import { HereSectionComponent } from '../here-section/here-section.component';
import { HdNavbarModule } from 'src/app/pages/includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from 'src/app/pages/includes/hd-footer/hd-footer.module';

const routes: Routes = [
  {
    path: '',
    component: EmailMarketingHomeComponent,
  },
];

@NgModule({
  declarations: [
    EmailMarketingHomeComponent,
    HereSectionComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    HdNavbarModule,
    HdFooterModule,
    RouterModule.forChild(routes),
  ],
})
export class EmailMarketingHomeModule { }
