import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { FaqPageTrainingComponent } from './faq-page.component';
import { EmFaqTrainingComponent } from '../faqs-training/em-faq/em-faq.component';
import { HdNavbarModule } from 'src/app/pages/includes/hd-navbar/hd-navbar.module';
import { HdFooterModule } from 'src/app/pages/includes/hd-footer/hd-footer.module';

const routes: Routes = [
  {
    path: '',
    component: FaqPageTrainingComponent,
  },
];

@NgModule({
  declarations: [
    FaqPageTrainingComponent,
    EmFaqTrainingComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
        HdNavbarModule,
        HdFooterModule,
    RouterModule.forChild(routes),
  ],
})
export class FaqPageTrainingModule { }
