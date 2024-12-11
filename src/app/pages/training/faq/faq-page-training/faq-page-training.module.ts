import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { FaqPageTrainingComponent } from './faq-page.component';
import { EmFaqTrainingComponent } from '../faqs-training/em-faq/em-faq.component';

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
    RouterModule.forChild(routes),
  ],
})
export class FaqPageTrainingModule { }
