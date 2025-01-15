import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { FaqPageComponent } from './faq-page.component';

const routes: Routes = [
  {
    path: '',
    component: FaqPageComponent,
  },
];

@NgModule({
  declarations: [
    FaqPageComponent
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class FaqPageModule { }
