import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared-module/shared-module.module';
import { PrivacyPolicyPageComponent } from './privacy-policy-page.component';

const routes: Routes = [
  {
    path: '',
    component: PrivacyPolicyPageComponent,
  },
];

@NgModule({
  declarations: [
    PrivacyPolicyPageComponent,
  ],
  imports: [
    CommonModule,
    SharedModuleModule,
    RouterModule.forChild(routes),
  ],
})
export class PrivacyPolicyPageModule { }
