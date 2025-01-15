import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { TermsConditionsPageComponent } from './terms-conditions-page.component';

const routes: Routes = [
  {
    path: '',
    component: TermsConditionsPageComponent,
  },
];

@NgModule({
  declarations: [
    TermsConditionsPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class TermsConditionsPageModule { }
